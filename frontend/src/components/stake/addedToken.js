function AddedToken({nft}) {
    return ( 
        <div className="card  shadow" style={{width:"100%",borderRadius:"50px"}}>
            <div className="card-header text-center">
                <h6 className="text-sea my-2">YOUR TOKENS</h6>
            </div>
            <div  className="stake-holder">
                <div style={{backgroundImage:`url(${nft.Image})`}} 
                className="stake-img" alt=""></div>
            </div>
            <div className="card-body text-sea">
                <div className="d-flex justify-content-between">
                    <h6>Token Id:</h6>
                    <h6>{nft.id}</h6>
                </div>
                <div className="d-flex justify-content-between">
                    <h6>Pearls earned:</h6>
                    <h6>0$PRL</h6>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="d-grid gap-2 col-6">
                        <button className="btn btn-outline-sea mt-2 sea-text">STAKE</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default AddedToken;