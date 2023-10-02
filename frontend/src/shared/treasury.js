import P1 from "../assets/treasure.png"


function Treasury() {
    return ( 
        <>
             <div className="card shadow-lg my-5  bg-light-transparent " style={{borderRadius:"60px"}}>
                <div className="d-flex justify-content-between row">

                    <div className="col-12 col-md-8">
                        <div className="my-5 py-5 px-5 ">
                            <h5>HIGHLIGHT</h5>

                            <h1  style={{fontSize:"50px"}}>
                                The treasury status of the DAO transparently displayed in a dashboard
                            </h1>
                            <p className="lead" style={{fontSize:"25px"}}>Check the status of the latest donations, incentives and royalties coming from the secondary market</p>
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-dark p-3 sea-text" style={{borderRadius:"50px"}}>COMING SOON</button>
                            </div>
                        </div>


                    </div>
                    <div className="col-md-4 d-flex flex-column">
                        <div className="d-none d-md-block"></div>
                        <div className="stake-holder mt-auto d-none d-md-block" style={{borderRadius:"60px"}}>
                            <div style={{backgroundImage:`url(${P1})`, backgroundPosition:"left",borderBottomRightRadius:"60px"}} 
                            className="stake-img" alt=""></div>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
     );
}

export default Treasury;