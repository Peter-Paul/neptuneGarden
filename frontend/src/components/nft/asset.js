// import { useSelector } from "react-redux";
// import { AlchemyProvider, Contract } from "ethers"
// import erc20Abi from "../../abis/erc20.json"
// import { useCallback, useEffect, useState } from "react";
import AssetInfo from "./assetInfo";

function NftAsset({nft}) {
    // const [nftAssets, setNftAssets] = useState([])
    // const {mainRpc,testRpc} = useSelector((state) => state.app)
    // const providers = {
    //     main: new AlchemyProvider("matic",mainRpc),
    //     test: new AlchemyProvider("maticmum",testRpc)
    // }


    // const getAssetDetails = useCallback( async () => {
    //     const {assets,owner} = nft
    //     for(let address of assets){
    //         const contract = new Contract(address, erc20Abi, providers.test)
    //         const symbol = await contract.symbol()
    //         let balance = await contract.balanceOf(owner)
    //         balance = balance.toString()
    //         nftAssets ? setNftAssets([...nftAssets,{address,symbol,balance}]) : setNftAssets([{address,symbol,balance}])
    //     }
        
    // },[nft,nftAssets,providers.test])

    // useEffect( () => {
    //     getAssetDetails()
    // },[getAssetDetails])

    return (
        <>
            {
                nft && nft.assets && nft.assets.length > 0 &&

                <>
                    <ul  class="list-group list-group-flush">
                        {
                            nft.assets.map( (asset) => {
                                return (
                                    <li key={asset} class="list-group-item">    
                                        <AssetInfo  address={asset} owner={nft.owner} />
                                    </li>
                                )
                            } )
                        }
                    </ul>
                </>
            }
            
        </>
      );
}

export default NftAsset;