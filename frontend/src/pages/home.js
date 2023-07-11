import MintNft from "../components/home/mintNft";
import Slider from "../components/home/slider";

function Home({nfts}) {
    return ( 
        <>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="d-flex justify-content-center mb-3">
                        <MintNft nft={nfts[0]} width="25rem"/>
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <div className="mb-2">
                        <Slider nfts={nfts} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="col-8">    
                            <div className="card mt-2">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div >
                                            <h5 className="text-secondary">100/8623</h5>
                                            <h6><strong>MINTED</strong></h6>
                                        </div>
                                        <div >
                                            <h5 className="text-secondary">0.05 MATIC</h5>
                                            <h6><strong>PER NFT</strong></h6>
                                        </div>
                                        <div >
                                            <h5 className="text-secondary">1 NFT</h5>
                                            <h6><strong>FREE</strong></h6>
                                        </div>
                                        <div >
                                            <h5 className="text-secondary">3 NFTs</h5>
                                            <h6><strong>PER WALLET</strong></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Home;