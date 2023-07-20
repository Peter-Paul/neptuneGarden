import DataTable from "react-data-table-component"
import NftDetail from "./nftDetails"
import { useSelector } from "react-redux"

function ManageNfts() {
    const {nfts} = useSelector((state) => state.app)

    const columns = [
        {
            name:"COLLECTIBLES",
            selector: row => row.Image,
            cell: row => {
                return (
                    <>
                        { nfts &&
                            <div  className={`logo-holder`}>
                                <div style={{backgroundImage:`url(${row.Image})`}} 
                                className="logo-img" alt=""></div>
                            </div>
                        }
                    </>
                )
            }
        },


        {
            name: 'DETAIL',
            selector: row => row.Image,
            cell: row => {
                return (
                    <>
                        { nfts &&
                            <>
                                <div className='d-flex flex-column my-2'>
                   
                                    <div>
                                        <NftDetail nft={row} />
                                    </div>
                                </div>
                            </>
                        }
                    </>
                )
            }
        },

        

        {
            name: 'DISPLAY',
            selector: row => row.show,
            cell: row => { 
                const {address,show} = row
                return (
                    <>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id={address} checked={show} 
                                onChange={ () => 
                                ""    // patchGame( {...row, show: show ?  false : true} ) 
                                }
                            />
                            <label className="form-check-label" htmlFor={address}>
                                {/* Checked switch checkbox input */}
                            </label>
                        </div>
                    </>
                )
            }
        },

        {
            name: 'REMOVE',
            selector: row => row.show,
            cell: row => { 
                // const {Image} = row
                return (
                    <>
                        <button className='btn btn-sm btn-danger' onClick={() => "" }>
                            <i className='fa fa-trash'></i>
                        </button>
                    
                    </>
                )
            }
        },
    ]
    return (  
        <>
            <DataTable 
                columns={columns}
                data={nfts}
                theme="light"
                pagination
            />
        </>
    );
}

export default ManageNfts;