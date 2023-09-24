import { useSelector } from "react-redux";
import AddToken from "../components/stake/addToken";
import AddedTokens from "../components/stake/addedTokens";
import { useCallback, useEffect, useState } from "react";
import NftService from "../services/nfts";

function StakeNfts() {
    const {connected,userAddress,baseUrl} = useSelector((state) => state.app)
    const [nfts, setNfts] = useState(undefined)
    
    const getNFTs = useCallback( async () => {
        if (userAddress && connected){
            const nftService = new NftService(baseUrl)
            const nfts = await nftService.getStakedNfts(userAddress)
            console.log(nfts)
            setNfts(nfts)
        }
    }, [userAddress,connected,baseUrl] )


    const uploadNft = async tokenId => {
        const payload = {
            address: userAddress,
            tokenId,
        }
        const nftService = new NftService(baseUrl)
        const nfts = await nftService.postStakedNft(payload)
        console.log(nfts)
        setNfts(nfts)
    }

    const removeNft = async tokenId => {
        const nftService = new NftService(baseUrl)
        await nftService.deleteStakedNft(tokenId).then( () => {
            setNfts(nfts.filter( n => n.tokenId !== tokenId))
        })
    }

    useEffect( ()=> { 
        getNFTs()
    },[getNFTs,connected,userAddress])


   
    return ( 
        <>
            <div className="d-none d-md-block">

                <div className="container bg-sea-transparent shadow p-3" style={{minHeight:"70vh"}}>


                    {
                        (connected && userAddress && nfts)  ?
                            <>
                                <h2 className="text-light my-5 text-center" style={{fontSize:"40px"}}>Earn Pearls From Staking Your NFT</h2>
                                <div className="d-flex justify-content-evenly row">
                                        <div className="col-12 col-md-6 mb-3">
                                            <AddToken nfts={nfts} uploadNft={uploadNft} />
                                        </div>
                                        { nfts && nfts.length > 0 &&
                                            <div className="col-12 col-md-6 mb-3">
                                                <AddedTokens nfts={nfts} removeNft={removeNft} />
                                            </div>
                                        }
                                    
                                </div>
                            </>:
                            <div className="d-flex justify-content-center text-light" style={{height:"70vh", alignItems:"center"}}>
                                <h2><strong>Please connect wallet to stake NFTs</strong></h2>
                            </div>
                    }

                </div>
            </div>

            <div className="container d-block d-md-none bg-sea-transparent shadow p-3" style={{height:"70vh"}}>
                <div className="d-flex justify-content-center text-light" style={{height:"70vh", alignItems:"center"}}>
                    <h2 className="text-center"><strong>Kindly use desktop to access Staking functionality!</strong></h2>
                </div>
            </div>
        </>

        
     );
}

export default StakeNfts;