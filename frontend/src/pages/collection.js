import CollectionSlider from "../components/collection/collectionSlider";

function NftCollection({nfts}) {
    return ( 
        <>
            {
                nfts &&
                <CollectionSlider nfts={nfts} />
            }
        </>
     );
}

export default NftCollection;