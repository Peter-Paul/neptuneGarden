import { useState } from "react";
import { useSelector } from "react-redux";
import neptuneAbi from "../../abis/neptune.json"
import { AlchemyProvider, Contract } from "ethers";


function AddToken({nfts,uploadNft}) {
    const {connected,userAddress,mainRpc,testRpc,isTestNet,neptuneAddress} = useSelector((state) => state.app)
    const [tokenId,setTokenId] = useState("")
    const [noError,setNoError] = useState({msg:"",state:true})
    const [noSuccess,setNoSuccess] = useState(true)

    const providers = {
        main: new AlchemyProvider("matic",mainRpc),
        test: new AlchemyProvider("maticmum",testRpc)
    }
    const nftContract = new Contract(neptuneAddress, neptuneAbi, isTestNet?providers.test:providers.main)

    const handleTokenChange = (e) => {
        setTokenId(e.target.value)
    }

    const checkOwnership = async () => {
        try{
            const nftSupply = (await nftContract.totalSupply()).toString()
            const addedIds = nfts.map( n => n.tokenId)
            if (!addedIds.includes(tokenId)){
                if (tokenId <= nftSupply){
                    const owner = (await nftContract.ownerOf(tokenId))
                    if (owner === userAddress){
                        uploadNft(tokenId)
                        setNoSuccess(false)
                    }else{
                        setNoError({msg:"Only owner of this NFT can stake it!",state:false})
                    }
                }else{
                    setNoError({msg:"Token has not yet been minted!",state:false})
                }
            }else{
                setNoError({msg:"Token has already been added!",state:false})
            }
            
        }catch(err){
            setNoError({msg:"Error adding this token!",state:false})
            console.log(err)
        }
    }
    

    return ( 
        <>
            <div className="d-flex justify-content-center">
                <div className="col-12 col-md-8">        
                    <div className="card shadow text-sea p-3" style={{borderRadius:"50px"}}>
                        <div className="card-body">
                            <h2>Earning Pearls</h2>
                            <p><strong>Pearls are simple cumulative XPs. They are tied to the NFT and are automatically transferred when the NFT is sold</strong></p>
                            <div className="d-flex justify-content-between">
                                <h5>Max NFTs per wallet:</h5>
                                <h5>3</h5>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h5>Pearls earned per minute:</h5>
                                <h5>1</h5>
                            </div>
                        </div>
                    </div>
           
                    <div className="card shadow text-sea p-3 mt-2" style={{borderRadius:"50px"}}>
                        <div className="card-body">
                            {/* <h2>Add Token</h2> */}
                            
                            <input name="Background" className="form-control mb-3 form-control-lg border-sea sea-text text-center" style={{borderRadius:"50px"}}
                            placeholder="Enter token id to stake e.g 1" value={tokenId} onChange={ e => handleTokenChange(e) }/>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <h5>Tokens added:</h5>
                                <h5>{nfts.length} of 3</h5>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h5>Transaction cost:</h5>
                                <h5>$0</h5>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className={`btn btn-lg btn-outline-sea sea-text mt-2 ${ (!connected || !userAddress || !tokenId) && "disabled" }`}
                                 onClick={() => {checkOwnership(); setTokenId("")}}  >ADD TOKEN</button>
                            </div>

                            {
                                    !noSuccess &&
                                    <div className={`alert alert-success alert-dismissible fade mt-2 show 
                                        `} role="alert">
                                        <p><strong>Congratulations!</strong></p> 
                                        <p>NFT has been added. Your may now <strong>STAKE</strong> and <strong>UNSTAKE</strong></p>
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                                         onClick={() => {
                                            setNoSuccess(true);
                                        }}></button>
                                    </div>
                                }

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
                </div>
            </div>
        </>
     );
}

export default AddToken;