import Partners from "../shared/partners";
import BG2 from "../assets/bg2.png"
import AiEcosystem from "../shared/aiEcosystem";
import Erc6551Info from "../shared/erc6551";
import Community from "../shared/community";
import BottomCards from "../shared/bottomCards";
import Treasury from "../shared/treasury";
import { motion } from "framer-motion"


function Home({nfts}) {

    
    return ( 
        <>
            {
                nfts &&
                <>

                    <div  className="cover-holder shadow">
                        <div style={{backgroundImage:`url(${BG2})`,backgroundPosition:"right"}} 
                            className="d-flex justify-content-center cover-img" alt="">
                        </div>
                    </div>

                    <br className="my-5" />
                    <br className="my-5" />
                    <br className="my-5" />
                    <br className="my-5" />
                    <br className="my-5" />

                    <motion.div
                        variants={{
                            start: {opacity:0, y:9},
                            end: {opacity:1, y :0}
                        }}
                        initial="start"
                        whileInView="end"
                        viewport={{ once: false }}
                        transition={{ duration:0.6 , delay: 0.3 }}
                        >
                        <div className="container">
                            <AiEcosystem />
                        </div>
                    </motion.div>

                    <br className="my-5" />

                    <div className="container">
                        <div className="my-5">
                            <Erc6551Info nfts={nfts} />
                        </div>
                    </div>

                    <br className="my-5" />

         

                    <div className="d-flex justify-content-center">
                        <motion.div
                            variants={{
                                start: {width:"80%"},
                                end: {width:"90%"}
                            }}
                            initial="start"
                            whileInView="end"
                            viewport={{ once: false }}
                            transition={{ duration:0.2 , delay: 0.3 }}
                            >
                            <div className="my-5">
                                <Community />
                            </div>
                        </motion.div>
                      
                    </div>
                    
   

                    <div className=" container">
                        <Partners />
                    </div>

                    <br className="my-5" />
                    <br className="my-5" />
                    <br className="my-5" />
                    <br className="my-5" />

                    <div className="container my-5">
                        <div className="my-5">
                            <BottomCards />
                        </div>
                    </div>

                    <br className="my-5" />
                    {/* <br className="my-5" /> */}
                    {/* <br className="my-5" /> */}
                    {/* <br className="my-5" /> */}


                    <motion.div
                        variants={{
                            start: {opacity:0, y:9},
                            end: {opacity:1, y :0}
                        }}
                        initial="start"
                        whileInView="end"
                        viewport={{ once: false }}
                        transition={{ duration:0.6 , delay: 0.3 }}
                        >
                        <div className=" container">
                            <Treasury />
                        </div>
                    </motion.div>
          
                </>
            }
        </>
     );
}

export default Home;