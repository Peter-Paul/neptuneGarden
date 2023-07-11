import { Link } from "react-router-dom";

function SlideNft({nft}) {

    
    return ( 
        <>
        <Link style={{textDecoration:"none"}} to={`/${nft.name}`}>
            <div className="card"  style={{"width": "18rem"}}>
            <img src={`https://ipfs.io/ipfs/${nft.cid}/neptune.png`} className="card-img-top" alt="..." />
            <div className="card-body">
                <small>Last Price</small>
                <h5>
                    <strong>
                    0.05 MATIC  
                    </strong>
                </h5>
            </div>
            </div>
        </Link>
        </>
     );
}

export default SlideNft;