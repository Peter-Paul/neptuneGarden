import { Link } from "react-router-dom";
import Partners from "../shared/partners";
import BG1 from "../assets/bg.png"
import AiEcosystem from "../shared/aiEcosystem";
import Erc6551Info from "../shared/erc6551";
import Community from "../shared/community";
import BottomCards from "../shared/bottomCards";
import Treasury from "../shared/treasury";

function Home({nfts}) {

    const styles = {
        messageContainer:{
            height:"50vh",
            alignItems:"center"
        },
        message:{
            width:"31rem"
        }
    }
    return ( 
        <>
            {
                nfts &&
                <>

                    <div  className="cover-holder shadow">
                        <div style={{backgroundImage:`url(${BG1})`}} 
                            className="d-flex justify-content-center cover-img" alt="">
                                <div className="p-3 container bg-light-transparent" style={{borderRadius:"60px"}}>
                                    <div className="d-flex justify-content-center" >
                                        <div style={styles.message}>
                                            <h1 className="logo text-dark  mb-4" style={{fontSize:"50px"}}>NeptuneGarden</h1>
                                            
                                            <hr className=" mb-3" />

                                            <h1 className="display-4 text-center mb-5">
                                                Advance public goods for Web3 and decentralized AI
                                            </h1>

                                            <div className="d-flex justify-content-center mb-3">
                                                <div className="d-grid gap-2 col-6">
                                                    <Link to="/collection">
                                                        <button className="btn btn-lg btn-outline-dark sea-text">View Collection</button>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <br className="my-5" />
                    <br className="my-5" />
                    <br className="my-5" />
                    <br className="my-5" />
                    <br className="my-5" />

                    <div className="container">
                        <AiEcosystem />
                    </div>

                    <br className="my-5" />

                    <div className="container">
                        <div className="my-5">
                            <Erc6551Info nfts={nfts} />
                        </div>
                    </div>

                    <br className="my-5" />

                    <div className="container">
                        <div className="my-5">
                            <Community />
                        </div>
                    </div>
                    
   

                    <div className=" container">
                        <Partners />
                    </div>

                    <br className="my-5" />
                    <br className="my-5" />
                    <br className="my-5" />
                    <br className="my-5" />

                    <div  className="cover-holder shadow">
                        <div style={{backgroundImage:`url(${BG1})`}} 
                            className="d-flex justify-content-center cover-img" alt="">
                                <div className=" container">
                                    <Treasury />
                                </div>
                        </div>
                    </div>

                    <div className="container my-5">
                        <div className="my-5">
                            <BottomCards />
                        </div>
                    </div>
                    
           
                </>
            }
        </>
     );
}

export default Home;