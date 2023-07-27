import { useSelector } from "react-redux";

function NftInfo() {
    const {nftMaxSupply,nftMintPrice,nftSupply} = useSelector((state) => state.app)
    
    return (  
        <>
            <div className="d-flex justify-content-evenly row">
                <div className="card shadow col-md-3 col-12 text-center mb-3" style={{width:"18rem",borderRadius:"50px"}}>
                    <div className="card-body">
                        {
                            (nftMaxSupply && nftSupply) ?
                            <h5 className="text-sea">{nftSupply}/{nftMaxSupply} - <strong>MINTED</strong></h5> :
                            <span class="placeholder-glow col-12"></span>
                        }
                    </div>
                </div>

                <div className="card shadow col-md-3 col-12 text-center mb-3" style={{width:"18rem",borderRadius:"50px"}}>
                    <div className="card-body">
                        {
                            (nftMaxSupply && nftSupply) ?
                            <h5 className="text-sea">{nftMintPrice} MATIC - <strong>PER NFT</strong></h5> :
                            <span class="placeholder-glow col-12"></span>
                        }
                    </div>
                </div>

                <div className="card shadow col-md-3 col-12 text-center mb-3" style={{width:"18rem",borderRadius:"50px"}}>
                    <div className="card-body">
                        <h5 className="text-sea">1 NFT - <strong>FREE</strong></h5>
                    </div>
                </div>

                <div className="card shadow col-md-3 col-12 text-center mb-3" style={{width:"18rem",borderRadius:"50px"}}>
                    <div className="card-body">
                        <h5 className="text-sea">3 NFTs - <strong>PER WALLET</strong></h5>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NftInfo;