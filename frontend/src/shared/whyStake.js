import NFT from "../assets/n4.jpg"

function WhyStake() {
    return ( 
        <>
            <div className="my-5 text-center text-light">
                <h2 className="my-2" style={{fontSize:"40px"}}>Stake Neptune NFTs</h2>
            </div>
            <div className="d-flex justify-content-evenly row">
                <div className="col-md-6 col-12 d-none d-md-block">
                    <div className="d-flex justify-content-end">
                        <div  className="homeNft-holder shadow">
                            <div style={{backgroundImage:`url(${NFT})`}} 
                            className="homeNft-img" alt=""></div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="col-md-8 col-12 text-light">
                        
                        <h3 className="my-3">Why stake your NFT?</h3>
                        <p>
                            Earn Pearls ($PRLS) from staking your NFT. Pearls are simple cumulative XPs. They are tied to the NFT and are automatically transferred when the NFT is sold. Pears are cumulative.
                            As the project & community grows, XPs may be turned into a currency with a possible Buy/Sell Tax of 1% to sustain the treasury
                        </p>
                        <button className="btn btn-lg btn-outline-light mt-2 sea-text">Stake</button>
                    </div>
                </div>
                
            </div>
        </>
     );
}

export default WhyStake;