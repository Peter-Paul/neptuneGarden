import AddToken from "../components/stake/addToken";
import AddedTokens from "../components/stake/addedTokens";

function StakeNfts() {
    const nfts = [
        {
            id:"1",
            Image:"https://ipfs.io/ipfs/bafkreiepopglebcyyq6fgfi3qfvkxb27kkcnweekb6lcgogdy3sfux3ud4",
        },
        {
            id:"2",
            Image:"https://ipfs.io/ipfs/bafkreianufxivkxx2gehui32nmgywf4j6srndtoptlaoadkwp233fxgkeq",
        },
        // {
        //     id:"3",
        //     Image:"https://ipfs.io/ipfs/bafkreianufxivkxx2gehui32nmgywf4j6srndtoptlaoadkwp233fxgkeq",
        // },
    ]
   
    return ( 
        <div className="container bg-sea-transparent shadow p-3">
            <h2 className="text-light my-5 text-center" style={{fontSize:"40px"}}>Earn Pearls From Staking Your NFT</h2>


            <div className="d-flex justify-content-evenly row">
                    <div className="col-12 col-md-6 mb-3">
                        <AddToken nfts={nfts} />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <AddedTokens nfts={nfts} />
                    </div>
                
            </div>
        </div>
     );
}

export default StakeNfts;