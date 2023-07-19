// import MintNft from "../components/home/mintNft";
import MintSlider from "../components/home/mintSlider";
import Slider from "../components/home/slider";
import NftInfo from "./nftInfo";

function Home({nfts}) {

    const styles = {
        messageContainer:{
            height:"46vh",
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
                    <div className="row">
                        <div className="col-12 col-md-6 d-flex justify-content-center" style={styles.messageContainer}>
                                <div style={styles.message}>
                                    <h1 className="logo text-light mb-4" style={{fontSize:"50px"}}>NeptuneGarden</h1>
                                    <hr className="text-light mb-5" />
                                    <h1 className="display-4 text-light mb-5">Mint your 1st NFT in the Neptune Garden for Free!</h1>
                                    <div class="d-grid gap-2 col-6">
                                        <button className="btn btn-lg btn-outline-light ">View Collection</button>
                                    </div>
                                </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <MintSlider nfts={nfts.slice(0,3)} />
                        </div>
                    </div>
                    <div className="my-5">
                        <NftInfo />
                    </div>
                    <div className="my-5">
                        <Slider nfts={nfts.slice(3)} />
                    </div>
           
                </>
            }
        </>
     );
}

export default Home;