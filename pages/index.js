import Head from 'next/head'
import Image from 'next/image'
import { BigNumber, ethers } from "ethers";
import Web3Modal from "web3modal";
import {CoinbaseWalletSDK} from '@coinbase/wallet-sdk';
import WalletConnectProvider from "@walletconnect/web3-provider";
import { useEffect, useState } from 'react';
import NFT from "../contracts/NFT.json";
import Sidebar from  '../components/sidebar/Sidebar'
import Main from "../components/main/main"
// import classes from './_app'
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import Poogenesis from '../components/poogrowgenesis/Poogenesis'
import Poomini from '../components/poomini/Poomini'
import classes from '../styles/index.module.css'
import axios from 'axios';
import Web3 from 'web3';






function Home() {

  //poo genesis
const [web3provider,setWeb3Provider] = useState();

const nftAddress='0x7C376EF0F9eE4Ac618e6Adb32b46a5C306F35cE3'
0xb880C617611D317E92cda9D28E7d52001412F5c6

//const nftAddress='0x7C376EF0F9eE4Ac618e6Adb32b46a5C306F35cE3'; //  real

const abi=NFT.abi;
const [address, setAddress] = useState('');
const [nftPrice, setNftPrice]=useState(0);
const [totSupply,setTotalSupply] = useState(0);
const [totminted,setTotalMinted] = useState(0);
const [balance, setBalance] = useState(0);
const  [issalestarted, setSaleStarted] =useState(false);
const [tokenContract,settTokenContract] = useState()
const [nftNumber, setNftNumber] = useState(0)
const [isminted, SetIsMinted] = useState(false)
const [signer, setSigner] = useState('')
//let tokenContract;
//const nftCost=6500000000000000;
const nftCost=65000000000000000;
const divideval=1000000000000000000;
const nftbnbprice=parseFloat(nftCost/divideval);
const [totalAward, setTotalAward] =useState(0);


//common--------------
const [pooprice,setPooPrice] = useState('');
const [bnbprice,setBnbPrice] = useState('');
const [noofpoo,setNoOfPoo] = useState('');
const [walletswitch,setwalletswitch] =useState(false);

// poomini

const [miniweb3provider,setminiWeb3Provider] = useState();
//const mininftAddress='0xC169Fa886431c36210f74b3b7F0ABa0FD0e16759'; //real
const mininftAddress='0xC169Fa886431c36210f74b3b7F0ABa0FD0e16759'; 

const miniabi=NFT.abi;
const [miniaddress, setminiAddress] = useState('');
const [mininftPrice, setminiNftPrice]=useState(0);
const [minitotSupply,setminiTotalSupply] = useState(0);
const [minitotminted,setTotalminiMinted] = useState(0);
const [minibalance, setminiBalance] = useState(0);
const  [miniissalestarted, setminiSaleStarted] =useState(false);
const [minitokenContract,setminiTokenContract] = useState()
const [mininftNumber, setminiNftNumber] = useState(0)
const [miniisminted, SetminiIsMinted] = useState(false)
//let tokenContract;
const mininftCost=32000000000000000;
const minidivideval=1000000000000000000;
const mininftbnbprice=parseFloat(mininftCost/minidivideval);


//ui akash common for both----------------------
  const [isActive, setActive] = useState(false);
  const toggle = () => setActive (!isActive);
  const [activePage , setPage] = useState(['none','','none'])
  const pull_data = (data) => {setPage(data); }
  const [curpage, setCurPage] = useState(2);
  //-----------------------------------------

//waltter integration ---------------------------------- common for both
const providerOptions = {
coinbasewallet:{
  package: CoinbaseWalletSDK, // required
  options: {
    infuraId: "https://rinkeby.infura.io/v3/2499b077f4de43f39fe538662cd916d1" // required
    //https://rinkeby.infura.io/v3/2499b077f4de43f39fe538662cd916d1
   
} 
},

walletconnect: {
  package: WalletConnectProvider, // required
     
    options: {

      //infuraId: "https://rinkeby.infura.io/v3/2499b077f4de43f39fe538662cd916d1", // required
      rpc: {
        56: 'https://bsc-dataseed.binance.org/'
      },
      network: 'binance',
      chainId: 56,
      infuraId: '2499b077f4de43f39fe538662cd916d1',
    // }
  
}
}
}


useEffect(()=>{
  if(web3provider){
pancakePrice(); 
getTokensIds();
minigetTokensIds();
  }
} ,[curpage])


useEffect(()=>{
 
  findpoocoinnumbers();
},[noofpoo,pooprice])

const pancakePrice= async ()=>{
  await axios.get("https://api.pancakeswap.info/api/v2/tokens/0xa1611e8d4070dee36ef308952cf34255c92a01c5").then((res)=>{setPooPrice(res.data.data.price);})
  await axios.get("https://api.pancakeswap.info/api/v2/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c").then((res)=>{setBnbPrice(res.data.data.price);})
}

const findpoocoinnumbers=()=>{
if(pooprice && bnbprice & totSupply){
//let inp= document.getElementById("bnb").value
const weiusd=0.000000000000001900000
const totpoo=((totalAward * weiusd)/pooprice).toFixed(0)
//const poochain = totalAward * weiusd;
//console.log(Number(totSupply))

if(totminted>200 && totminted<601){
      setNoOfPoo((totpoo/100)*5);
 } else if (totminted>600 && totminted<1201) {
     setNoOfPoo((totpoo/100)*10);  
} else if (totminted>1200 && totminted<1601) {
     setNoOfPoo((totpoo/100)*15);
 
} else if (totminted>1600 && totminted<2201 ) {
  setNoOfPoo((totpoo/100)*10);
   
}else if (totminted>2200 && totminted<2801 ) {
  setNoOfPoo((totpoo/100)*15);
   
} else if (totminted>2800 && totminted<3401){
  setNoOfPoo((totpoo/100)*15);
  
} else if (totminted>3400 && totminted<3601){
  setNoOfPoo((totpoo/100)*15);
  
}else if (totminted>3600 && totminted<=4000){
  setNoOfPoo((totpoo/100)*15);
  
  } else {
    setNoOfPoo(0);
}
}   

} 

  



//-----------------------------------------------------


//=upoogenesis-----------------------------------


useEffect(()=>{
  if(web3provider){
    pancakePrice();
    getTokensIds(); 
    minigetTokensIds
    SetIsMinted(false) 
    SetminiIsMinted(false)
    findpoocoinnumbers();
    }
},[address,isminted,tokenContract])

useEffect( ()=>{
  if(nftNumber>0){
    setNftPrice(nftCost*nftNumber)
   }
  },[nftNumber])

 useEffect(()=>{
  if(address){
   setBalance(Number(totSupply)-Number(totminted))
   getTokensIds();
    }
 },[totminted])

 const getTokensIds= async ()=>{
  if(address && tokenContract){
   setSaleStarted(await tokenContract.hasSaleStarted());
   setTotalSupply(await tokenContract.MAX_PoochainClub());
   setTotalMinted(await tokenContract.totalSupply())
   setTotalAward(await tokenContract.getTotalAwards())
   findpoocoinnumbers();
   //console.log("mi",Number(totalAward));
   }
 }



//--------poomini

useEffect(()=>{
  if(web3provider){
    //console.log("do")
    getTokensIds();
    minigetTokensIds(); 
    SetminiIsMinted(false) 
    }
},[address,miniisminted])

useEffect( ()=>{
  if(mininftNumber>0){
    setminiNftPrice(mininftCost*mininftNumber)
   }
  },[mininftNumber])

 useEffect(()=>{
  if(address){
   minigetTokensIds(); 
   setminiBalance(Number(minitotSupply)-Number(minitotminted))
    }
 },[minitotminted])
 

 const minigetTokensIds= async ()=>{
  if(address && minitokenContract){
   setminiSaleStarted(await minitokenContract.hasSaleStarted());
   setminiTotalSupply(await minitokenContract.MAX_PoochainClub());
   setTotalminiMinted(await minitokenContract.totalSupply())
  
 //console.log("mini",Number(miniissalestarted));
   }
 }

 



async function disconnect () {

  console.log("Killing the wallet connection", web3provider);

  // TODO: Which providers have close method?
  if(web3provider.close) {
    await web3provider.close();

    // If the cached provider is not cleared,
    // WalletConnect will default to the existing session
    // and does not allow to re-scan the QR code with a new wallet.
    // Depending on your use case you may want or want not his behavir.
    await web3Modal.clearCachedProvider();
    setWeb3Provider(null)
  }

 setAddress(null);

}



const addresssetfunc=(provider)=>{
  try {
    if(provider.provider.wc.protocol==='wc'){
      setWeb3Provider(provider);
      setAddress(provider.provider.accounts[0])
       } }catch (e) {
        console.log(e)
       }
    
       try{
    if (provider.connection.url==='metamask'){
      console.log(provider.provider.selectedAddress)
      setAddress(provider.provider.selectedAddress)
      setWeb3Provider(provider);
    } 
  } catch (e) {
    console.log(e)
  }
}



async function connectwallet(){
  try{
   
    
    let web3Modal = new Web3Modal({
      //network: "mainnet", // optional
      cacheProvider: false, // optional
      providerOptions,// required
    });
    const instance = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
   // fetchAccountData(provider)
    console.log(provider)
    console.log(provider.connection.url)
    addresssetfunc(provider)
   
    console.log(address);
   
    const {chainId } = await provider.getNetwork();
     const signer=provider.getSigner();
    
       
    settTokenContract(new ethers.Contract(nftAddress,abi,signer));
    setminiTokenContract(new ethers.Contract(mininftAddress,abi,signer));

    console.log(tokenContract);
 
   
    
   //check sale started 
  if(tokenContract){
    getTokensIds();
  }

  if(minitokenContract){
    minigetTokensIds();
  }
 
     //setwalletswitch(true)
    
    
 
  }catch(err) {
    console.error(err);
  }
}


async function minttoken(){
  
  if(curpage==2){

  if(nftNumber<=0){
   alert("Please Enter positive number" );
   return;
  } else if (nftNumber>20){
    alert("Please Enter numbers between 0 to 20" );
    return;
  }
}  else if (curpage==3){
    if(mininftNumber<=0){
      alert("Please Enter positive number" );
      return;
     } else if (mininftNumber>20){
       alert("Please Enter numbers between 0 to 20" );
       return;
     }
  }


    try{
 
  if(curpage==2){
    const transaction=await tokenContract.mintPooChainClub(nftNumber,{value: BigInt(nftPrice)})
  }
  else if(curpage==3){
    const transaction=await minitokenContract.mintPooChainClub(mininftNumber,{value: BigInt(mininftPrice)})
  }
   
    const transactionReceipt = await transaction.wait();
    SetIsMinted(true);
    SetminiIsMinted(true);
    //console.log(transactionReceipt.status);
  if (transactionReceipt.status !== 1) {
    alert('error message');
    return;}
  } catch(err) {
    try{
      alert(err.data.message);
    } catch (err){
      console.log(err);
    }
    console.log(err)
    return;
 }
 
  
}





  return (

    <div className={classes.app} >
      <Head>
        <title>PooPlace</title>
        <meta name="description" content="PoopPlace Market Place" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Sidebar isActive = {isActive} toggle = {toggle} func={pull_data} pageActive = {activePage} pageno ={setCurPage} />
      
    <Main display={activePage[0]}  address={address} />

    <Poogenesis display={activePage[1]}  totminted={totminted} price={nftbnbprice} address={address}  poochain={noofpoo}
    salestarted={issalestarted} connect={connectwallet} totsupply={totSupply} sale={issalestarted} mint={minttoken} noofnft={setNftNumber} pageno ={curpage} 
      walletdiscon={disconnect}  walletswitch={walletswitch}
    />

    <Poomini display={activePage[2]} totminted={Number(minitotminted)} price={mininftbnbprice} address={address}  
    salestarted={miniissalestarted} connect={connectwallet} totsupply={minitotSupply} sale={miniissalestarted} 
    mint={minttoken} noofnft={setminiNftNumber} pageno ={curpage} walletdiscon={disconnect} walletswitch={walletswitch}/>

    <HiOutlineMenuAlt1 className={classes.open__menu} onClick={toggle} />
    <button onClick={disconnect}>disconnect</button>

  </div>




    
  )
}


export default Home;
