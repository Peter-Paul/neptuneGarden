import { BrowserProvider, Contract } from "ethers";
import { useSelector } from "react-redux";
import neptuneAbi from "../../abis/neptune.json"
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function AddedToken({nft,removeNft}) {
    const {neptuneAddress} = useSelector((state) => state.app)
    const [NFT, setNFT] = useState({
        image:undefined,
        staked:undefined,
        rewardsInStake:undefined,
        rewardsOutStake:undefined,
    })
    const [contract,setContract] = useState(undefined)
    const [stakeProcess,setStakeProcess] = useState(false)
    const [noError,setNoError] = useState({msg:"",state:true})

    const nftInfo = useCallback(async () => {

        const provider = new BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        
        const nftContract = new Contract(neptuneAddress, neptuneAbi, signer)
        setContract(nftContract)

        const {tokenId} = nft

        const tba = (await nftContract.showTBA(tokenId)).toString()
        const uri = (await nftContract.tokenURI(nft.tokenId)).toString()
        const meta = await axios.get(uri)
        const image = meta.data.Image
        const staked = (await nftContract._isStaked(tokenId))
        const rewardsInStake = staked && (await nftContract.stakeInfo(tokenId)).toString()
        const rewardsOutStake = (await nftContract.stakers(tba)).toString().split(",")[1]

        setNFT({image,staked,rewardsInStake,rewardsOutStake})

    },[nft,neptuneAddress])

    const stake = async () => {
        try{
            setStakeProcess(true)
            const tx =  await contract.stake(nft.tokenId)
            const receipt = await tx.wait()
            console.log(receipt)
            nftInfo()
            setStakeProcess(false)
        }catch(err){
            console.log(err)
            setNoError({msg:"Error while staking token!",state:false})
        }
    }

    const unstake = async () => {
        try{
            setStakeProcess(true)
            const tx =  await contract.unstake(nft.tokenId)
            const receipt = await tx.wait()
            console.log(receipt)
            nftInfo()
            setStakeProcess(false)
        }catch(err){
            console.log(err)
            setNoError({msg:"Error while unstaking token!",state:false})
        }
    }

    useEffect( () => {
        nftInfo()
    }, [nftInfo] )

    return ( 
        <div className="card shadow" style={{width:"100%",borderRadius:"50px"}}>
            <div className="card-header text-center">
                <h6 className="text-sea my-2">YOUR TOKENS</h6>
            </div>
            <div  className="stake-holder">
                <div style={{backgroundImage:`url(${NFT.image && NFT.image})`}} 
                className="stake-img" alt=""></div>
            </div>
            <div className="card-body text-sea">
                <div className="d-flex justify-content-between">
                    <h5>Token Id:</h5>
                    <h5>{nft.tokenId}</h5>
                </div>
                <div className="d-flex justify-content-between">
                    <h5>Pearls earned:</h5>
                    <h5>
                        {NFT.staked ? `${NFT.rewardsInStake ? NFT.rewardsInStake : 0 } $PRL` : `${NFT.rewardsOutStake ? NFT.rewardsOutStake : 0} $PRL` }
                    </h5>
                </div>
                <div className="d-flex justify-content-evenly mt-2">
                    <div className="d-grid gap-2 col-6">
                        <button className={`btn btn-lg btn-outline-sea sea-text ${stakeProcess && "disabled"}`}
                            onClick={ () => {
                                (NFT.staked !== undefined) && NFT.staked ? unstake() : stake()
                            } }>
                            { stakeProcess ? "Processing..." : NFT.staked? "UNSTAKE":"STAKE"}
                        </button>
                    </div>
                    <div>
                        <button className={`btn btn-lg btn-outline-danger ${stakeProcess && "disabled"}`} onClick={ () => removeNft(nft.tokenId)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>

                {
                    !noError.state &&
                    <div className={`alert alert-danger alert-dismissible fade mt-2 show 
                        `} role="alert">
                        <p>Opps! <strong>{noError.msg}.</strong>  Close this alert and try again!</p>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setNoError({msg:"",state:true})}></button>
                    </div> 
                }
            </div>
        </div>
     );
}

export default AddedToken;