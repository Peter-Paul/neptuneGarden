import P1 from "../assets/Picture1.png"
import P2 from "../assets/Picture2.png"
import P3 from "../assets/Picture3.png"
import P4 from "../assets/Picture4.png"
import P5 from "../assets/Picture5.png"
import P6 from "../assets/Picture6.png"


function Partners() {
    return ( 
        <>
            
            <div className="d-flex justify-content-center">
                <div className="col-10">
                    <div className="text-center" style={{borderRadius:"50px"}}>
                        <div className="my-5 text-center ">
                            <div className="d-flex justify-content-center">
                                <h1 className="col-12 col-md-8 display-3 my-2" >
                                    Born from the vision of 6 Web3 pioneers
                                </h1>
                            </div>
                                <h1 className="display-6" style={{fontSize:"38px"}}> 
                                    Enter the Garden, contribute to its
                                    growth and gain best-in-class
                                    mentorship, funding and support when
                                    building your decentralized AI project.
                                </h1>
                        </div>
                        <div className="p-3 d-flex justify-content-evenly row">
                            <div className="col-12 col-md-4">
                                <div className="d-flex flex-column">
                                    <div className="my-3 d-flex justify-content-start">
                                        <div className="partner-holder">
                                            <div style={{backgroundImage:`url(${P1})`}} 
                                            className="partner-img" alt=""></div>
                                        </div>
                                        <h5 className="ms-3 mt-3">ALGOVERA</h5>
                                    </div>
                                    <div className="my-3 d-flex justify-content-start">
                                        <div  className="partner-holder">
                                            <div style={{backgroundImage:`url(${P2})`}} 
                                            className="partner-img" alt=""></div>
                                        </div>
                                        <h5 className="ms-3 mt-3">BACALHAU</h5>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="d-flex flex-column">
                                    <div className="my-3 d-flex justify-content-start">
                                        <div  className="partner-holder">
                                            <div style={{backgroundImage:`url(${P3})`}} 
                                            className="partner-img" alt=""></div>
                                        </div>
                                        <h5 className="ms-3 mt-3">POLYGON</h5>
                                    </div>
            
                                    <div className="my-3 d-flex justify-content-start">
                                        <div  className="partner-holder">
                                            <div style={{backgroundImage:`url(${P4})`}} 
                                            className="partner-img" alt=""></div>
                                        </div>
                                        <h5 className="ms-3 mt-3">PROTOCOL LABS</h5>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="d-flex flex-column">
                                    <div className="my-3 d-flex justify-content-start">
                                        <div  className="partner-holder">
                                            <div style={{backgroundImage:`url(${P5})`}} 
                                            className="partner-img" alt=""></div>
                                        </div>
                                        <h5 className="ms-3 mt-3">OCEAN PROTOCOL</h5>
                                    </div>
                                    <div className="my-3 d-flex justify-content-start">
                                        <div  className="partner-holder">
                                            <div style={{backgroundImage:`url(${P6})`}} 
                                            className="partner-img" alt=""></div>
                                        </div>
                                        <h5 className="ms-3 mt-3">OPEN DATA COMMUNITY</h5>
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

export default Partners;