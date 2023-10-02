import BG1 from "../assets/bg3.png"


function BottomCards() {
    return ( 
        <>
            <div className="d-flex justify-content-evenly row">
                <div className="card my-3 col-md-3 col-12" 
                    style={{backgroundImage:`url(${BG1})`,height:"500px",backgroundPosition: "center",borderRadius:"60px"}}>
                    <div className="card-body mx-2 my-3 shadow-lg bg-light-transparent" style={{borderRadius:"60px"}}>

                        <div className="d-flex align-items-start flex-column mb-3" style={{height: "400px"}}>
                            <div className="mb-auto p-2">
                                <h1 className="mt-4" style={{fontSize:"30px"}}>
                                    <strong>Neptune’s Garden DAO</strong>
                                </h1>
                            </div>
                            <div className="d-flex justify-content-end p-2">
                                <button className="btn btn-dark btn-lg sea-text" style={{borderRadius:"60px"}}>Go to Docs</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card scaled-bg2 my-3 col-md-3 col-12"
                    style={{height:"500px",borderRadius:"60px"}}>
                    <div className="card-body mx-2 my-3 shadow-lg bg-light-transparent" style={{borderRadius:"60px"}}>
                        
                        <div className="d-flex align-items-start flex-column mb-3" style={{height: "400px"}}>
                            <div className="mb-auto p-2">
                                <h1 className="mt-4" style={{fontSize:"30px"}}>
                                    <strong>Governance Forum</strong>
                                </h1>
                            </div>
                            <div className="d-flex justify-content-end p-2">
                                <button className="btn btn-dark btn-lg sea-text" style={{borderRadius:"60px"}}>Go to Discord</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card scaled-bg2 my-3 col-md-3 col-12"
                    style={{height:"500px",borderRadius:"60px"}}>
                    <div className="card-body mx-2 my-3 shadow-lg bg-light-transparent" style={{borderRadius:"60px"}}>
                    <div className="d-flex align-items-start flex-column mb-3" style={{height: "400px"}}>
                            <div className="mb-auto p-2">
                                <h1 className="mt-4" style={{fontSize:"30px"}}>
                                    <strong>Voting Platform</strong>
                                </h1>
                            </div>
                            <div >

                                <div className="d-flex justify-content-end p-2">
                                    <button className="btn btn-dark btn-lg sea-text" style={{borderRadius:"60px"}}>Go to Snapshot</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
     );
}

export default BottomCards;