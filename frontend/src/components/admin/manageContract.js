import { BrowserProvider, Contract } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import neptuneAbi from "../../abis/neptune.json"
import { changeAuction, changePause } from "../../state/app.reducers";

function ManageContract() {
    
    const {nftEthBalance,nftPaused,nftAuctioned,neptuneAddress} = useSelector((state) => state.app)
    const [contract,setContract] = useState(undefined)
    // const [signer,setSigner] = useState(undefined)
    const [pauseProcess,setPauseProcess] = useState(false)
    const [auctionProcess,setAuctionProcess] = useState(false)
    const [withdrawProcess,setWithdrawProcess] = useState(false)
    const [mintProcess,setMintProcess] = useState(false)
    const [mintPrice,setMintPrice] = useState()
    const dispatch = useDispatch()
    
    
    const withdrawFunds = async () => {
        try{
            setWithdrawProcess(true)
            await contract.withdraw()
        }catch(err){console.log(err)}
    }
    
    const updateMintPrice = async () => {
        try{
            if (mintPrice < 0 ){
               return
            }
            setMintProcess(true)
            const tx =  await contract.setMintPrice(mintPrice)
            const receipt = await tx.wait()
            // const events = receipt.events
            console.log(receipt)
            setMintProcess(false)
            dispatch(changePause({nftPaused:nftPaused?false:true}))

        }catch(err){console.log(err)}
    }

    const handlePriceChange = (e) => setMintPrice(  e.target.value  )

    const pause_unpause = async () => {
        try{
            setPauseProcess(true)
            console.log( contract)
            console.log( await contract.pause())
            // const tx = nftPaused ? await contract.unpause() : await contract.pause()
            // const receipt = await tx.wait()
            // const events = receipt.events
            // console.log(receipt)
            setPauseProcess(false)
            dispatch(changePause({nftPaused:nftPaused?false:true}))

        }catch(err){console.log(err)}
    }

    const updateAuction = async () => {
        try{
            setAuctionProcess(true)
            const tx = nftAuctioned ? await contract.deactivateAuction() : await contract.activateAuction()
            const receipt = await tx.wait()
            // const events = receipt.events
            console.log(receipt)
            setAuctionProcess(false)
            dispatch(changeAuction({nftAuctioned:nftAuctioned?false:true}))

        }catch(err){console.log(err)}
    }

    const onInit = useCallback( async () => {

        // Load wallet signer
        const provider = new BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        // setSigner(signer)
        
        const nftContract = new Contract(neptuneAddress, neptuneAbi, signer)
        console.log(nftContract)
        setContract(nftContract)
    },[neptuneAddress])

    useEffect( () => {
        onInit()
    }, [onInit] )

    return ( 
        <>
            <div className="mb-5 d-flex justify-content-evenly">
                <div>
                    <h5>Contract Balance</h5>
                    <h5><span class="badge bg-sea">{nftEthBalance} MATIC</span></h5>
                    <h5>Contract Address</h5>
                    <h5><span class="badge bg-sea">{neptuneAddress}</span></h5>
                </div>
                <div className="col-6">
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <input name="price" className="form-control form-control-md shadow" 
                        placeholder="e.g 0.05" value={mintPrice} onChange={ e => handlePriceChange(e) }/>
                        <button className="btn btn-lg btn-primary" onClick={ () => updateMintPrice()}>
                            {mintProcess?"Processing...":"Set Mint Price"}
                        </button>
                    </div>
                </div>
            </div>
        

            <div className="d-flex justify-content-evenly  mt-3">
                <div class="d-grid gap-2 col-3 mx-auto">
                    <button className="btn btn-lg btn-primary" disabled={nftEthBalance<=0?true:false} onClick={ () => withdrawFunds()}>
                        {withdrawProcess?"Processing...":"Withdraw"}
                    </button>
                </div>
                <div class="d-grid gap-2 col-3 mx-auto">
                    <button className="btn btn-lg btn-primary" onClick={ () => pause_unpause()}>
                        {pauseProcess ? "Processing..." : nftPaused?"Unpause":"Pause"}
                    </button>
                </div>
                <div class="d-grid gap-2 col-3 mx-auto">
                    <button className="btn btn-lg btn-primary" onClick={ () => updateAuction()}>
                        {auctionProcess ? "Processing..." : nftAuctioned?"Deactivate Auction":"Activate Auction"}
                    </button>
                </div>

            </div>


        </>
     );
}

export default ManageContract;