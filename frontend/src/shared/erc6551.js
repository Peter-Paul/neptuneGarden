import NFT from "../assets/bg4.png"
// import MintSlider from "../components/home/mintSlider";


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
                            
                            <h2 className="my-3 " style={{fontSize:"60px"}}>Changing the rules of the game</h2>
                            <h2  style={{fontSize:"35px"}} >
                                    Leveraging ERC6551 to track DAO
                                    contributions, distribute rewards and
                                    turn each Pass into a digital identity
                                    within Neptune’s Garden DAO.
                            </h2>
                            <button className="btn btn-lg btn-outline-light mt-2 sea-text">Stake</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-12" >
                    <div className="d-flex justify-content-end" >
                         {/* <MintSlider nfts={nfts.slice(0,4)} /> */}
                        <div  className="newNft-holder shadow">
                            <div style={{backgroundImage:`url(${NFT})`}} 
                            className="newNft-img" alt=""></div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </>
     );
}

export default Erc6551Info;