import { useState } from "react";
import { Modal } from "react-bootstrap"


function NftDetail({nft}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return ( 
        <>
            <button type="button" className="btn btn-sm btn-outline-dark py-1"
                onClick={() => handleShow()}>
                Details
            </button>

            <Modal backdrop="static" keyboard={false} show={show} >
                <div className="modal-content" >
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel"><strong>NFT Details</strong></h1>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-center mt-2">
                                    <div  className="homeNft-holder">
                                        <div style={{backgroundImage:`url(${nft.Image})`}} 
                                        className="homeNft-img" alt=""></div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <div>Background</div>
                                    <div>{nft.Background}</div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <div>Skin</div>
                                    <div>{nft.Skin}</div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <div>Head</div>
                                    <div>{nft.Head}</div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <div>Eyes</div>
                                    <div>{nft.Eyes}</div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <div>Clothes</div>
                                    <div>{nft.Clothes}</div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <div>Accessories</div>
                                    <div>{nft.Accessories}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default NftDetail;