import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Footer from './shared/footer';
import Nav from './shared/nav';
import NftPage from './pages/nft';

function App() {
  const nfts = [
    {
      cid:"bafybeid5jyrgwotnef2igvguencmnu7hxt64kov5o6f3bq4wovh665mbmi",
      name:"neptune1"
    },
    {
      cid:"bafybeic47sjbl5pkrb5xzyg5w4nvvwf5vuyb4mmbzes2mhpscucdc7lzy4",
      name:"neptune2"
    },
    {
      cid:"bafybeigrxqsoq4evusqnq4o52hgsohv6isou6hixzt37sjahjun2l3h3lu",
      name:"neptune3"
    },
    {
      cid:"bafybeic4cug5fjqdd7645dqqs7pzycg53xsna2uenphjkqzwrqmhjdbl4y",
      name:"neptune4"
    },
    {
      cid:"bafybeihxfknvcs5lfrogt3zpetdshajadxero7icqzhejn5a4brhtrj45a",
      name:"neptune5"
    },
    {
      cid:"bafybeigklvztt6omwq3ltwqbsuzehcqxkazivjl5eh6sas7zoz7n6rrrlm",
      name:"neptune6"
    },
    {
      cid:"bafybeic4xuxcgxvvxylvsqg5kmluhdh5mwi552lwew3s2ea472zmwzfn3a",
      name:"neptune7"
    },
    {
      cid:"bafybeiccbid2wjdmqdmff62eyr5tbulthqosaufz7hxr3dsdw6ugjkw4ly",
      name:"neptune8"
    },
    {
      cid:"bafybeicg2lmy4t6booo5efoyquoqpvwx4zruenu5hmofthqz5fv5g6kwh4",
      name:"neptune9"
    },
    {
      cid:"bafybeid3vqgkegz3dhwwtkcyfqy4xhvaapseibajz546pdshylssdvkjqu",
      name:"neptune10"
    },
    {
      cid:"bafybeigycim5yrpfgmsbyyg4ozcxg4tuyijdqrj2zayz4iltdmlbck245y",
      name:"neptune11"
    },
    {
      cid:"bafybeicnkapv24pvkhihmfllefn3bfawu7wx2eqkfm6qc7pkhxxkujaega",
      name:"neptune12"
    },
    {
      cid:"bafybeidfu3hunakb7bw5x6crqlrzlyoz532ahuwn6tposjl2hsw64d4wju",
      name:"neptune13"
    }
  ]
  return (
      <Router>
        <div>
          {/* NAVIGATION */}
          <div className='mb-5 sticky-top'>
            <Nav />
          </div>
          <br className='my-5'></br>
          <div className="container-fluid my-5">
            <Routes>
              <Route  exact path="/"
                      element={ <Home nfts={nfts} /> }
              />
              <Route  exact path="/:name"
                      element={ <NftPage nfts={nfts} /> }
              />
            </Routes>
          </div>
          <br className='my-5'></br>
          <div className='mt-5'>
            <Footer />
          </div>
        </div>
      </Router>
  );
}

export default App;
