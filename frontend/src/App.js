import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Footer from './shared/footer';
import Nav from './shared/nav';
import NftPage from './pages/nft';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import NftService from './services/nfts';
import { connectUser, loadState } from './state/app.reducers';
import { AlchemyProvider, BrowserProvider, Contract, formatEther } from 'ethers';
import neptuneAbi from "./abis/neptune.json"
import Admin from './pages/admin';


function App() {
  const {nfts,mainRpc,testRpc} = useSelector((state) => state.app)
  const dispatch = useDispatch()

  
  const onInit = useCallback( async () => {
    const providers = {
        main: new AlchemyProvider("matic",mainRpc),
        test: new AlchemyProvider("maticmum",testRpc)
    }
    const admins = (process.env.REACT_APP_ADMINS).split(",")
    const testnet = process.env.REACT_APP_TESTNET
    const isTestNet = testnet && parseInt(testnet) < 2 && parseInt(testnet) >= 0 && parseInt(testnet)
    const neptuneAddress = isTestNet ? process.env.REACT_APP_TESTNET_CONTRACT : process.env.REACT_APP_MAINNET_CONTRACT
    const nftContract = new Contract(neptuneAddress, neptuneAbi, isTestNet?providers.test:providers.main)
    console.log(nftContract)
    // Load contract info
    const nftMaxSupply = (await nftContract.MAX_SUPPLY()).toString()
    const nftMintPrice = formatEther( (await nftContract.MINT_PRICE()) ).toString()
    const nftSupply = (await nftContract.totalSupply()).toString()
    const nftPaused = (await nftContract.paused())
    const nftAuctioned = (await nftContract.auctioned())
    const nftEthBalance = isTestNet ? 
                          (await providers.test.getBalance(neptuneAddress)).toString() : 
                          (await providers.main.getBalance(neptuneAddress)).toString()
    // Load backend info
    const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
    const nftService = new NftService(baseUrl)
    const nftList = await nftService.getNfts()

    dispatch( loadState({nfts:nftList,admins,neptuneAddress,nftMaxSupply,nftMintPrice,nftSupply,nftPaused,nftEthBalance,nftAuctioned}) )
  },[dispatch,mainRpc,testRpc])

  useEffect( () => { 
    onInit() 
  }, [onInit] )

  const connectWallet = () => {
    const provider = new BrowserProvider(window.ethereum)
    if (window.ethereum) {
        provider.send("eth_requestAccounts", []).then(async () => {
          const signer  = await provider.getSigner()
          const userAddress = await signer.getAddress()

          dispatch( connectUser({userAddress,connected:true}) )
        })
    } else {
        console.log("Please Install Metamask!!!");
    }
  }

  const disconnectWallet = () =>  dispatch( connectUser( {userAddress:undefined,connected:false} ) )

  const styles = {
    content:{
      minHeight:"40vh"
    }
  }

  return (
      <Router>
        <div>
          {/* NAVIGATION */}
          <div className='mb-5 sticky-top'>
            <Nav connectWallet={connectWallet} disconnectWallet={disconnectWallet} />
          </div>
          {/* <br className='my-5'></br> */}
          {/* BODY */}
          <div className="container my-5" style={styles.content}>
            <Routes>
              <Route  exact path="/"
                      element={ <Home nfts={nfts} /> }
              />
              <Route  exact path="/:name"
                      element={ <NftPage nfts={nfts} /> }
              />
              <Route  exact path="/admin"
                      element={ <Admin nfts={nfts} /> }
              />
            </Routes>
          </div>
          <br className='my-5'></br>
          {/* FOOTER */}
          <div className='mt-5'>
            <Footer />
          </div>
        </div>
      </Router>
  );
}

export default App;
