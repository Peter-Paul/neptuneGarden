function MintNft({nft}) {
    return ( 
        <>
            <div className="card border-dark shadow-lg" style={{"width": "25rem"}}>
            <img src={`https://ipfs.io/ipfs/${nft.cid}/neptune.png`} className="card-img-top" alt="..." />
            <div className="card-body ">
                <div className="d-flex justify-content-center">
                    {/* <h5>0.05 MATIC</h5> */}
                    <div>
                        <button className="btn btn-lg btn-outline-dark "> <strong>MINT</strong></button>
                    </div>
                </div>
            </div>
            </div>
        </>
     );
}

export default MintNft;