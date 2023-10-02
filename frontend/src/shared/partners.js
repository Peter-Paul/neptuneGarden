import P1 from "../assets/partners.png"

function Partners() {
    return ( 
        <>
            
            <div className="d-flex justify-content-center">
                <div className="col-10">
                    <div className="text-center" style={{borderRadius:"50px"}}>
                        <div className="my-5 text-center ">
                            <div className="d-flex justify-content-center">
                                <h1 className="col-12 col-md-10 my-2" style={{fontSize:"60px"}}>
                                    Born from the vision of 6 Web3 pioneers
                                </h1>
                            </div>
                            <div className="d-flex justify-content-center">

                                <p className="lead col-10 col-md-8" style={{fontSize:"30px"}}> 
                                    Enter the Garden, contribute to its
                                    growth and gain best-in-class
                                    mentorship, funding and support when
                                    building your decentralized AI project.
                                </p>
                            </div>
                        </div>

                        <div className="partners-holder">
                            <div style={{backgroundImage:`url(${P1})`}} 
                            className="partners-img" alt=""></div>
                        </div>
                        {/* <div className="p-3 d-flex justify-content-evenly row">
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
                        </div> */}
                    </div>
                </div>
            </div>
        </>
     );
}

export default Partners;