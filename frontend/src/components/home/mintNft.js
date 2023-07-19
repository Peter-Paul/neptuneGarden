function MintNft({nft}) {
    return ( 
        <div className="card newNft-card">
            <div class="card-header text-center sea-text text-sea">
                FEATURED
            </div>
            <div className="card-body">

                <div  className="newNft-holder shadow">
                    <div style={{backgroundImage:`url(https://ipfs.io/ipfs/${nft.cid}/neptune.png)`}} 
                    className="newNft-img" alt=""></div>
                </div>
            </div>

        </div>
        // <div className="card border-dark" style={{"width": "22rem"}}>
        //     <img src={`https://ipfs.io/ipfs/${nft.cid}/neptune.png`} className="card-img" alt="..." />
        //     <div class="card-img-overlay">
        //         <h6 class="card-title"><span class="badge bg-secondary">New</span></h6>
        //     </div>
        //     <div className="card-body ">
        //         <div className="d-flex justify-content-center">
        //                 <div class="d-grid gap-2 col-6 mx-auto">
        //                     <button class="btn btn-lg btn-primary" type="button">Mint</button>
        //                 </div>
        //         </div>
        //     </div>
        // </div>
     );
}

export default MintNft;