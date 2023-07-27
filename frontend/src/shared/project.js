// import PJ from "../assets/project.png"

function Project() {
    return ( 
        <>
            <h2 className='text-center text-light mb-3' style={{fontSize:"40px"}}>PROJECT</h2>
            <hr />
            <div className="d-flex justify-content-evenly row">
                <div className="col-12 col-md-8">
                    <div className="card shadow bg-sea-transparent text-light p-3" style={{borderRadius:"50px"}}>
                        <div className="card-body">
                            <p>Open-source public goods funding program made for the people and built upon the proven model of generative PFPs, with a focus on digital identity.</p>
                            <ul className="">
                                <li className=" text-light"><p>ERC6551 standard is used to experiment with new reputation mechanisms</p></li>
                                <li className=" text-light"><p>Initial sale of ~8000 NFTs</p></li>
                                <li className=" text-light"><p>Distribution is arranged in 2 phases: private & public sale</p></li>
                                <li className=" text-light"><p>1 Free mint + 2x mints at 0.05MATIC</p></li>
                                <li className=" text-light"><p>All proceeds go to a community-owned treasury</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="col-12 col-md-6 d-none d-md-block">
                    <div  className="homeNft-holder">
                        <div style={{backgroundImage:`url(${PJ})`}} 
                        className="homeNft-img" alt=""></div>
                    </div>
                </div> */}
                
            </div>
        </>
     );
}

export default Project;