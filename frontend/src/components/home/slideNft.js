function SlideNft({nft}) {

    return ( 
        <>

            <div  className="homeNft-holder">
                <div style={{backgroundImage:`url(${nft.Image})`}} 
                className="homeNft-img" alt=""></div>
            </div>
        
            {/* <div className="card" style={{"width": "18rem"}}>
                <img src={`https://ipfs.io/ipfs/${nft.cid}/neptune.png`} className="card-img" alt="..." />
      
            </div> */}
        </>
     );
}

export default SlideNft;