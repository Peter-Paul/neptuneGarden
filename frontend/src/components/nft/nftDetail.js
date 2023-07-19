import { useState } from "react";
import NftMeta from "./meta";
import NftAsset from "./asset";

function NftDetail({nft}) {
    const [view, setView] = useState("assets")
    return ( 
        <div className="d-flex justify-content-center row">
            <a href="ipfs://QmZcH4YvBVVRJtdn4RdbaqgspFU8gH6P9vomDpBVpAL3u4/1">BoomyCloud lives</a>
            <div className="col-12 col-md-6">
                <div className="d-flex justify-content-center">
                    <div className="card border-dark shadow-lg" style={{"width": "30rem"}}>
                        <img src={`https://ipfs.io/ipfs/${nft.cid}/neptune.png`} className="card-img-top" alt="..." />
                    </div>
                </div>
            </div>
            <div className="card col-12 col-md-6" style={{height:"52vh"}}>
                <div className="card-body">
                    <div className="mb-4">
                        Address: 0xc0c53d02295c95ce03f3ac59e8186827065cef09
                    </div>
                    <ul className="nav nav-tabs justify-content-evenly">
                        <li className="nav-item" onClick={() => setView("assets")}>
                            <div className={`nav-link ${view === "assets" ? "active" : ""}`}>ASSETS</div>
                        </li>
                        <li className="nav-item" onClick={() => setView("collectibles")}>
                            <div className={`nav-link ${view === "collectibles" ? "active" : ""}`}>COLLECTIBLES</div>
                        </li>
                        <li className="nav-item" onClick={() => setView("meta")}>
                            <div className={`nav-link ${view === "meta" ? "active" : ""}`}>META</div>
                        </li>
                    </ul>

                    <div className="mt-4">
                        {
                            view === "meta" &&
                            <NftMeta nft={nft}/>
                        }

                        {
                            view === "assets" &&
                            <NftAsset nft={nft}/>
                        }
                    </div>
                </div>
            </div>
        </div>
     );
}

export default NftDetail;