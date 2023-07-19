function NftMeta({nft}) {
    return ( 
        <>
            <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between">
                    <div>Token Bound Address:</div>
                    <div>{nft.address}</div>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                    <div>Owner:</div>
                    <div>{nft.owner}</div>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                    <div>Name:</div>
                    <div>{nft.name}</div>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                    <div>Current Price:</div>
                    <div>{nft.price} MATIC</div>
                </li>
        
            </ul>
        </>
     );
}

export default NftMeta;