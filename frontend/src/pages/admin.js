import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ManageContract from "../components/admin/manageContract";
import AddNft from "../components/admin/addNft";
import ManageNfts from "../components/admin/manageNfts";

function Admin() {
    const {admins,userAddress,connected} = useSelector((state) => state.app)
    const [view, setView] = useState("managec")
    
    if( !userAddress || !connected || !(admins.includes(userAddress)) ){
        return <Navigate to="/" />
    }

    return ( 
        <>
            <div className="card shadow">
                <div className="card-body">
                    <ul className="nav nav-tabs justify-content-evenly">
                        <li className="nav-item" onClick={() => setView("managec")}>
                            <div className={`nav-link ${view === "managec" ? "active" : ""}`}>MANAGE CONTRACT</div>
                        </li>
                        <li className="nav-item" onClick={() => setView("add")}>
                            <div className={`nav-link ${view === "add" ? "active" : ""}`}>ADD NFT</div>
                        </li>
                        <li className="nav-item" onClick={() => setView("managen")}>
                            <div className={`nav-link ${view === "managen" ? "active" : ""}`}>MANAGE NFTS</div>
                        </li>
                    </ul>

                    <div className="mt-4">
                        {
                            view === "managec" &&
                            <ManageContract />
                        }

                        {
                            view === "add" &&
                            <AddNft />
                        }

                        {
                            view === "managen" &&
                            <ManageNfts />
                        }
                    </div>
                </div>
            </div>
        </>
     );
}

export default Admin;