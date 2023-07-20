function CollectionNft({nft}) {
    return ( 

        <>
            <div className="d-flex flex-column">
                <div className="justify-content-center">

                    <div  className="newNft-holder">
                        <div style={{backgroundImage:`url(${nft.Image})`}} 
                        className="newNft-img" alt=""></div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="d-grid gap-2 col-3 mx-auto">
                        <button className="btn btn-lg btn-outline-dark mt-2">Checkout</button>
                    </div>
                </div>
            </div>
        </>
     );
}

export default CollectionNft;