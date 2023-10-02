import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import P1 from "../assets/logo.png"

function Nav({connectWallet,disconnectWallet}) {
    const {userAddress,connected,admins,baseUrl} = useSelector((state) => state.app)
    return ( 
        <>
            {console.log(admins,userAddress,connected)}
            {/* <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <h2>NeptuneGarden</h2>
                    <div>
                        <button className="btn btn-outline-light">Connect Wallet</button>
                    </div>
                </div>
            </nav> */}
            <nav className="navbar navbar-expand-lg bg-light border-bottom border-bottom-dark sticky-top" data-bs-theme="light">
                <div className="container my-3 d-flex justify-content-between">
                    {/* <h4>NeptuneGarden</h4> */}
                    <div className="partner-holder">
                        <div style={{backgroundImage:`url(${P1})`}} 
                        className="partner-img" alt=""></div>
                    </div>
                    <div class="navbar-brand " href="#">
                        <Link to={"/"} className="logo" style={{textDecoration:"none", fontSize:"40px"}}>Neptune's Garden</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
       
                        </ul>
                    </div>


                    <div className="d-flex navbar-text  d-none d-md-block">
                        <div>
                            { baseUrl &&
                            
                                <button className="btn btn-lg btn-dark sea-text" style={{borderRadius:"60px"}}>
                                    {/* Stake */}
                                    <Link to={"/stake"} className="text-light" style={{textDecoration:"none"}} >STAKING</Link>
                                </button>
                            }
                        </div>
                        {/* <span className="me-2" style={{fontSize:"25px"}}><i className="fa fa-twitter text-sea"></i></span>
                        <span className="me-2" style={{fontSize:"25px"}}><i className="fa fa-instagram text-sea"></i></span> */}
                    {/* {
                        connected ?
                            <div>
                                <button className="btn btn-lg btn-outline-sea sea-text" onClick={()=>disconnectWallet()}>
                                    <span className="me-1">
                                        {`${userAddress.substr(0,10)}...`}
                                    </span>
                                    Disconnect
                                </button>
                            </div>
                        :
                            <div>
                                <button className="btn btn-lg btn-outline-sea sea-text" onClick={()=>connectWallet()}> Connect Wallet</button>
                            </div>
                    } */}
                    </div>
                </div>
            </nav>
        </>
     );
}

export default Nav;