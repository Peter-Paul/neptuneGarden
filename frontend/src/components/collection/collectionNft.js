function CollectionNft({nft}) {
    return ( 

        <>
            <div className="d-flex justify-content-center">
                <div className="d-flex flex-column">

                    <div  className="newNft-holder">
                        <div style={{backgroundImage:`url(${nft.Image})`}} 
                        className="newNft-img" alt=""></div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="d-grid gap-2 col-10">
                            <button className="btn btn-outline-dark mt-2">VIEW IN MAGIC DEN</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default CollectionNft;