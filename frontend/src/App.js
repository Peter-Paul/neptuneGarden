import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Footer from './shared/footer';
import Nav from './shared/nav';
import NftPage from './pages/nft';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
// import NftService from './services/nfts';
import { connectUser, loadState } from './state/app.reducers';
import { AlchemyProvider, BrowserProvider, Contract, formatEther } from 'ethers';
import neptuneAbi from "./abis/neptune.json"
import Admin from './pages/admin';
import NftCollection from './pages/collection';
import StakeNfts from './pages/stake';
import P1 from "./assets/n1.jpg"
// import P2 from "./assets/n2.jpg"
// import P3 from "./assets/n3.jpg"
// import P4 from "./assets/n4.jpg"
import P5 from "./assets/n5.jpg"
import P6 from "./assets/n6.jpg"
import P7 from "./assets/n7.png"
import P8 from "./assets/n8.png"
import P9 from "./assets/n9.png"
import P10 from "./assets/n10.png"
import P11 from "./assets/n11.png"
import P12 from "./assets/n12.png"
import P13 from "./assets/n13.png"
import P14 from "./assets/n14.png"
import P15 from "./assets/n15.png"
// import P16 from "./assets/n16.png"
import P17 from "./assets/n17.png"
import P18 from "./assets/n18.png"
import P19 from "./assets/n19.png"
import P20 from "./assets/n20.png"
import Loading from './shared/loading';

function App() {
  const {nfts,mainRpc,testRpc} = useSelector((state) => state.app)
  const dispatch = useDispatch()

  
  const onInit = useCallback( async () => {
    const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
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
    // const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL
    // const nftService = new NftService(baseUrl)
    // const nftList = await nftService.getNfts()
    const nftList = [
      {
        Background:"Background",
        Skin:"Skin",
        Head:"Head",
        Eyes:"Eyes",
        Clothes:"Clothes",
        Accessories:"Accesso",
        Image:P17,
        New:true
      },
      {
        Background:"Background",
        Skin:"Skin",
        Head:"Head",
        Eyes:"Eyes",
        Clothes:"Clothes",
        Accessories:"Accesso",
        Image:P18,
        New:true
      },
      {
        Background:"Background",
        Skin:"Skin",
        Head:"Head",
        Eyes:"Eyes",
        Clothes:"Clothes",
        Accessories:"Accesso",
        Image:P19,
        New:true
      },
      {
        Background:"Background",
        Skin:"Skin",
        Head:"Head",
        Eyes:"Eyes",
        Clothes:"Clothes",
        Accessories:"Accesso",
        Image:P20,
        New:true
      },
      {
        Background:"Background",
        Skin:"Skin",
        Head:"Head",
        Eyes:"Eyes",
        Clothes:"Clothes",
        Accessories:"Accesso",
        Image:P5,
        New:true
      },
      {
        Background:"Background",
        Skin:"Skin",
        Head:"Head",
        Eyes:"Eyes",
        Clothes:"Clothes",
        Accessories:"Accesso",
        Image:P11,
        New:true
      },
      {
        Background:"Background",
        Skin:"Skin",
        Head:"Head",
        Eyes:"Eyes",
        Clothes:"Clothes",
        Accessories:"Accesso",
        Image:P12,
        New:true
      },
      {
        Background:"Background",
        Skin:"Skin",
        Head:"Head",
        Eyes:"Eyes",
        Clothes:"Clothes",
        Accessories:"Accesso",
        Image:P6,
        New:true
      },
      {
        Background:"Background",
        Skin:"Skin",
        Head:"Head",
        Eyes:"Eyes",
        Clothes:"Clothes",
        Accessories:"Accesso",
        Image:P7,
        New:true
      },
      {
        Background:"Background",
        Skin:"Skin",
        Head:"Head",
        Eyes:"Eyes",
        Clothes:"Clothes",
        Accessories:"Accesso",
        Image:P8,
        New:true
      },
      {
        Background:"Background",
        Skin:"Skin",
        Head:"Head",
        Eyes:"Eyes",
        Clothes:"Clothes",
        Accessories:"Accesso",
        Image:P9,
        New:true
      },
      {
        Background:"Background",
        Skin:"Skin",
        Head:"Head",
        Eyes:"Eyes",
        Clothes:"Clothes",
        Accessories:"Accesso",
        Image:P10,
        New:true
      },
      {
        Background:"Background",
        Skin:"Skin",
        Head:"Head",
        Eyes:"Eyes",
        Clothes:"Clothes",
        Accessories:"Accesso",
        Image:P13,
        New:true
      },
      {
        Background:"Background",
        Skin:"Skin",
        Head:"Head",
        Eyes:"Eyes",
        Clothes:"Clothes",
        Accessories:"Accesso",
        Image:P14,
        New:true
      },
      {
        Background:"Background",
        Skin:"Skin",
        Head:"Head",
        Eyes:"Eyes",
        Clothes:"Clothes",
        Accessories:"Accesso",
        Image:P15,
        New:true
      },
      {
        Background:"Background",
        Skin:"Skin",
        Head:"Head",
        Eyes:"Eyes",
        Clothes:"Clothes",
        Accessories:"Accesso",
        Image:P1,
        New:true
      }
    ]

    dispatch( loadState({nfts:nftList,admins,neptuneAddress,nftMaxSupply,nftMintPrice,nftSupply,nftPaused,nftEthBalance,nftAuctioned,baseUrl,isTestNet}) )
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
      <>
        { nfts &&
        
          <Router>
            <div>
              {/* NAVIGATION */}
              <div className='sticky-top'>
                <Nav connectWallet={connectWallet} disconnectWallet={disconnectWallet} />
              </div>
              {/* <br className='my-5'></br> */}
              {/* BODY */}
              <div className="" style={styles.content}>
                <Routes>
                  <Route  exact path="/"
                          element={ <Home nfts={nfts} /> }
                  />
                  <Route  exact path="/:name"
                          element={ <NftPage nfts={nfts} /> }
                  />
                  <Route  exact path="/stake"
                          element={ <StakeNfts nfts={nfts} /> }
                  />
                  <Route  exact path="/collection"
                          element={ <NftCollection nfts={nfts} /> }
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
        
        }

        { !nfts && 
          <Loading/>
        }
      </>
  );
}

export default App;
