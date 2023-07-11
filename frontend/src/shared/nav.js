import { Link } from "react-router-dom";

function Nav() {
    return ( 
        <>
            {/* <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <h2>NeptuneGarden</h2>
                    <div>
                        <button class="btn btn-outline-light">Connect Wallet</button>
                    </div>
                </div>
            </nav> */}
            <nav className="navbar navbar-expand-lg bg-light border-bottom border-bottom-light sticky-top" data-bs-theme="light">
                <div class="container-fluid">
                    <h4>NeptuneGarden</h4>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to={"/"} class="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li class="nav-item">
                                <div class="nav-link" >Your NFTs</div>
                            </li>
                            <li class="nav-item">
                                <div class="nav-link" >Stake</div>
                            </li>
                            
                        </ul>
                    </div>
                    <div>
                        <button class="btn btn-outline-dark">Connect Wallet</button>
                    </div>
                </div>
            </nav>
        </>
     );
}

export default Nav;