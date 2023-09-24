// import NFT from "../assets/n4.jpg"`
import MintSlider from "../components/home/mintSlider";


function Erc6551Info({nfts}) {
    return ( 
        <>
            <div className="d-flex justify-content-between row">
                <div className="col-md-7 col-12">
                    <div className="d-flex justify-content-center" >
                        <div className="col-10">
                        <br className="my-5" />
                        <br className="my-5" />
                        <br className="my-5" />
                            
                            <h1 className="my-3 display-3">Changing the rules of the game</h1>
                            <h1 className="display-6" style={{fontSize:"38px"}} >
                                    Leveraging ERC6551 to track DAO
                                    contributions, distribute rewards and
                                    turn each Pass into a digital identity
                                    within Neptune’s Garden DAO.
                            </h1>
                            <button className="btn btn-lg btn-outline-light mt-2 sea-text">Stake</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-12" >
                    <div className="d-flex justify-content-end" >
                         <MintSlider nfts={nfts.slice(0,4)} />
                        {/* <div  className="homeNft-holder shadow">
                            <div style={{backgroundImage:`url(${NFT})`}} 
                            className="homeNft-img" alt=""></div>
                        </div> */}
                    </div>
                </div>
                
                
            </div>
        </>
     );
}

export default Erc6551Info;