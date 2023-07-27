import { useState } from "react";

function AddToken({nfts}) {
    const [tokenId,setTokenId] = useState("")

    const handleTokenChange = (e) => {
        setTokenId(e.target.value)
    }



    return ( 
        <>
            <div className="d-flex justify-content-center">
                <div className="col-12 col-md-8">        
                    <div className="card shadow text-sea p-3" style={{borderRadius:"50px"}}>
                        <div className="card-body">
                            <h2>Earning Pearls</h2>
                            <p>Pearls are simple cumulative XPs. They are tied to the NFT and are automatically transferred when the NFT is sold</p>
                            <div className="d-flex justify-content-between">
                                <h6>Max NFTs per wallet:</h6>
                                <h6>3</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6>Pearls earned per minute:</h6>
                                <h6>1</h6>
                            </div>
                        </div>
                    </div>
           
                    <div className="card shadow text-sea p-3 mt-2" style={{borderRadius:"50px"}}>
                        <div className="card-body">
                            {/* <h2>Add Token</h2> */}
                            
                            <input name="Background" className="form-control mb-3 form-control-lg border-sea" style={{borderRadius:"50px"}}
                            placeholder="Enter token id to stake e.g 1" value={tokenId} onChange={ e => handleTokenChange(e) }/>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <h6>Tokens added:</h6>
                                <h6>{nfts.length} of 3</h6>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6>Transaction cost:</h6>
                                <h6>$0</h6>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-outline-sea sea-text">ADD TOKEN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default AddToken;