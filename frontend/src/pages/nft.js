import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NftDetail from "../components/nft/nftDetail";

function NftPage({nfts}) {
    const {name:nftName} = useParams()
    const [nft, setNft] = useState(undefined)

    useEffect( () => {
        nfts && setNft( nfts.filter( ({name}) => name === nftName )[0] )
    }, [nftName,nfts] )

    return ( 
        <>
            { nft && 
            
                <div className="container">
                    <NftDetail nft={nft} />
                </div>
            }
        </>
     );
}

export default NftPage;