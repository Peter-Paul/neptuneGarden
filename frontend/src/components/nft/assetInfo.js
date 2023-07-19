import { AlchemyProvider, Contract } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import erc20Abi from "../../abis/erc20.json"

function AssetInfo({address,owner}) {
    const [balance, setBalance] = useState(undefined)
    const [symbol, setSymbol] = useState(undefined)
    const {mainRpc,testRpc} = useSelector((state) => state.app)
    const providers = {
        main: new AlchemyProvider("matic",mainRpc),
        test: new AlchemyProvider("maticmum",testRpc)
    }
    
    const getAssetDetails = useCallback( async () => {
        const contract = new Contract(address, erc20Abi, providers.test)
        const symbol = await contract.symbol()
        setSymbol(symbol)
        let balance = await contract.balanceOf(owner)
        balance = balance.toString()
        setBalance(balance)
        
    },[address,owner,providers.test])

    useEffect( () => {
        getAssetDetails()
    },[getAssetDetails] )

    return (  
        <>
            {
                symbol && balance &&
                <div className="d-flex justify-content-between">
                    <div>{symbol}:</div>
                    <div>{balance}</div>
                </div>
            }
        </>
    );
}


export default AssetInfo;