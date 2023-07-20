import { useState } from "react";
import Placeholder from "./placeholder.png"
import axios from "axios"

function AddNft() {
    const apiToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGJkNmNiNDJlYjU3N2I3ZjQ5RWQ4NTg4QmU2MENGMWNmNTE1RWMwNDAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODk3NTUwNzkxOTEsIm5hbWUiOiJuZyJ9.U2_WyjgLWECeSKNEo2g3y1WT-lS8Old0AC36LKHXK7E"
    const defaultNft = {
        Background:"",
        Skin:"",
        Head:"",
        Eyes:"",
        Clothes:"",
        Accessories:"",
        Image:undefined,
        New:true,
        Created:undefined
    }
    const [nftImage, setNftImage]= useState(undefined)
    const [nftImageFile, setNftImageFile]= useState(undefined)
    const [nft,setNft] = useState({...defaultNft})
    const [noError,setNoError] = useState({msg:"",state:true})
    const [noSuccess,setNoSuccess] = useState(true)
    const handleNftChange = (e) => setNft( { ...nft, [e.target.name] : e.target.value } )

    const timeCreated = () => { return Math.floor( new Date().getTime() / 1000 ).toString() }

    const createNft = async evt => {
        try{
            evt.preventDefault();
            if(nftImageFile){
                const required = Object.values(nft).slice(0,6)
                console.log(required)
                if(required.includes("")){
                    setNoError({msg:"Kindly check that all required information is provided",state:false})
                    return
                }

                const formData = new FormData()
                formData.append("file",nftImageFile, "neptune.png")
                const url = `https://api.web3.storage/upload`
                const res = await axios.post(url, formData,{
                    headers: {
                      "Content-Type": "multipart/form-data",
                      "Authorization" : `Bearer ${apiToken}`
                    },
                })
                if (res.status === 200 ) {
                    const {cid} = res.data
                    setNft( { ...nft, Image : `https://ipfs.io/ipfs/${cid}/`, Created:timeCreated()  } )
                    setNoSuccess(false)
                    console.log(res.data)
                }

            }else{
                setNoError({msg:"Kindly add NFT image",state:false})
                return
            }
        }catch(err){console.log(err)}
    }

    return ( 
        <>
            <div className="row">
                <div className="col-6 d-flex justify-content-center">
                    <div className="d-flex flex-column">
                        <div  className="newNft-holder text-center shadow">
                            <div style={{backgroundImage:`url(${nftImage? nftImage: Placeholder})`}} 
                            className="newNft-img" alt=""></div>
                        </div>
                        <label htmlFor="nftImage" className="btn btn-primary my-2">
                            Upload NFT Image
                        </label>
                        <input
                            type="file"
                            id="nftImage"
                            name="myImage"
                            onChange={(event) => {
                                try{
                                    console.log(event.target.files[0]);
                                    // uploadNftImage(event.target.files[0]);
                                    setNftImage(URL.createObjectURL(event.target.files[0]));
                                    setNftImageFile(event.target.files[0]);

                                }catch(err){console.log(err)}
                            }}
                            hidden
                        />
                        
                    </div>
                </div>
                <div className="col-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <form onSubmit={(e) => createNft(e) }>
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

                                {
                                    (noError.state && noSuccess) &&
                                    
                                    <div className="d-grid gap-2 mt-2">
                                        <button type="submit" value="Submit" 
                                        className="btn btn-primary">Create NFT</button>
                                    </div>
                                }

                                {
                                    !noSuccess &&
                                    <div className={`alert alert-success alert-dismissible fade show 
                                        `} role="alert">
                                        <p><strong>Congratulations!</strong></p> 
                                        <p>IPFS link can be got here: <strong className="me-1">{nft.Image}</strong>
                                        <span onClick={() => { window.open(nft.Image,"_blank") }}><i className="fa fa-link"></i></span></p>
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                                         onClick={() => {
                                            setNoSuccess(true);
                                            setNft({...defaultNft})
                                            setNftImage(undefined)
                                            setNftImageFile(undefined)
                                        }}></button>
                                    </div>
                                }

                                {
                                    !noError.state &&
                                    <div className={`alert alert-danger alert-dismissible fade show 
                                        `} role="alert">
                                        <p>Opps! <strong>{noError.msg}.</strong>  Close this alert and try again!</p>
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setNoError({msg:"",state:true})}></button>
                                    </div> 
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default AddNft;