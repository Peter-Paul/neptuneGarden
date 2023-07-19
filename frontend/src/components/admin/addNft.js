import { useState } from "react";
import Placeholder from "./placeholder.png"

function AddNft() {

    const defaultNft = {
        Background:"",
        Skin:"",
        Head:"",
        Eyes:"",
        Clothes:"",
        Accessories:""
    }
    const [nft,setNft] = useState({...defaultNft})
    const handleNftChange = (e) => setNft( { ...nft, [e.target.name] : e.target.value } )
    return ( 
        <>
            <div className="row">
                <div className="col-6 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <div  className="newNft-holder text-center shadow">
                            <div style={{backgroundImage:`url(${Placeholder})`}} 
                            className="newNft-img" alt=""></div>
                        </div>
                        <button className="btn btn-primary mt-4">Upload NFT Image</button>
                        
                    </div>
                </div>
                <div className="col-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <form>
                                <label className="form-label">Background <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                                <input name="Background" className="form-control mb-3 form-control-md" 
                                placeholder="e.g Red" value={nft.Background} onChange={ e => handleNftChange(e) }/>
                                
                                <label className="form-label">Skin <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                                <input name="Skin" className="form-control mb-3 form-control-md" 
                                placeholder="e.g Snake" value={nft.Skin} onChange={ e => handleNftChange(e) }/>

                                <label className="form-label">Head <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                                <input name="Head" className="form-control mb-3 form-control-md" 
                                placeholder="e.g Reptile" value={nft.Head} onChange={ e => handleNftChange(e) }/>

                                <label className="form-label">Eyes <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                                <input name="Eyes" className="form-control mb-3 form-control-md" 
                                placeholder="e.g Fire" value={nft.Eyes} onChange={ e => handleNftChange(e) }/>

                                <label className="form-label">Clothes <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                                <input name="Clothes" className="form-control mb-3 form-control-md" 
                                placeholder="e.g Shirt" value={nft.Clothes} onChange={ e => handleNftChange(e) }/>

                                <label className="form-label">Accessories <span className="text-danger" style={{fontSize:"10px"}} > *Required</span> </label>
                                <input name="Accessories" className="form-control mb-3 form-control-md" 
                                placeholder="e.g Watch" value={nft.Accessories} onChange={ e => handleNftChange(e) }/>


                                <div className="d-grid gap-2 mt-2">
                                    <button type="submit" value="Submit" 
                                    className="btn btn-primary">Create NFT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default AddNft;