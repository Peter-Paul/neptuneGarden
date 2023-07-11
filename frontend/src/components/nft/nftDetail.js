function NftDetail({nft}) {
    return ( 
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="d-flex justify-content-center">
                    <div className="card border-dark shadow-lg" style={{"width": "30rem"}}>
                        <img src={`https://ipfs.io/ipfs/${nft.cid}/neptune.png`} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="mb-4">
                    Address: 0xc0c53d02295c95ce03f3ac59e8186827065cef09
                </div>
                <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item">
                        <div className="nav-link active" aria-current="page" href="#">TOKENS</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" href="#">NFTs</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" href="#">META</div>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default NftDetail;