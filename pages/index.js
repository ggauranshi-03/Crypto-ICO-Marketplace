import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { usesStateContext } from "../Context";

import Header from "../Components/Header";
import Input from "../Components/Input";
import Button from "../Components/Button";
import Table from "../Components/Table";
import PreSaleList from "../Components/PreSaleList";
import UploadLogo from "../Components/UploadLogo";
import Loader from "../Components/Loader";
import Footer from "../Components/Footer";
import TokenCreator from "../Components/TokenCreator";
import TokenHistory from "../Components/TokenHistory";
import CreateICO from "../Components/CreateICO";
import Card from "../Components/Card";
import BuyToken from "../Components/BuyToken";
import WidthdrawToken from "../Components/WidthdrawToken";
import TokenTransfer from "../Components/TokenTransfer";
import ICOMarket from "../Components/ICOMarket";
import Marketplace from "../Components/Marketplace"
import { ICO_MARKETPLACE_ADDRESS, shortenAddress } from "../Context/constants";



const index = () => {
  const { widthdrawToken, buyToken, transferToken, createICOSALE, GET_ALL_ICOSALE_TOKEN, GET_ALL_USER_ICOSALE_TOKEN, createERC20, connectWallet, openBuyToken, setOpenBuyToken, openWithdrawToken, setOpenWithdrawToken, openTransferToken, setOpenTransferToken, openTokenCreator, setOpenTokenCreator, openCreateICO, setOpenCreateICO, address, setAddress, accountBalance, loader, setLoader, currency,reCall, PINATA_API_KEY, PINATA_SECRET_KEY } = usesStateContext();

  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000  });

  const [allICOs, setAllICOs] = useState();
  const [allUserIcos, setAllUserIcos] = useState();

  const [openAllICO, setOpenAllICO] = useState(false);
  const [openTokenHistory, setOpenTokenHistory] = useState(false);
  const [openICOMarketplace, setOpenICOMarketplace] = useState(false);

  const [buyICO, setBuyICO] = useState();

  const copyAddress = () => {
    navigator.clipboard.writeText(ICO_MARKETPLACE_ADDRESS);
    notifySuccess("Copied successfully")
  }

  useEffect(() => {
    if(address) {
      GET_ALL_ICOSALE_TOKEN().then((token) => {
        console.log("ALL", token);
        setAllICOs(token);
        
      })
      GET_ALL_USER_ICOSALE_TOKEN().then((token) => {
        console.log("USER", token);
        setAllUserIcos(token);
        
      })
    }
  }, [address, reCall])
  

  return <div>
    <Header accountBalance={accountBalance}
      setAddress={setAddress}
      address={address}
      connectWallet={connectWallet}
      ICO_MARKETPLACE_ADDRESS={ICO_MARKETPLACE_ADDRESS}
      shortenAddress={shortenAddress}
      setOpenAllICO={setOpenAllICO}
      openAllICO={openAllICO}
      setOpenTokenCreator={setOpenTokenCreator}
      openTokenCreator={openTokenCreator}
      setOpenTokenHistory={setOpenTokenHistory}
      openTokenHistory={openTokenHistory}
      setOpenICOMarketplace={setOpenICOMarketplace}
      openICOMarketplace={openICOMarketplace}
    />

  <div className="create">
    <h1 style={{fontSize: "2rem"}}>All ICOs Marketplace</h1>

    {
      allICOs?.length != 0 && (
        <Marketplace array={allICOs} shortenAddress={shortenAddress} setBuyICO={setBuyICO} setOpenBuyToken={setOpenBuyToken} currency={currency} />
      )
    }

    <Card setOpenAllICO={setOpenAllICO} setOpenTokenCreator={setOpenTokenCreator} setOpenTransferToken={setOpenTransferToken} setOpenTokenHistory={setOpenTokenHistory} setOpenWithdrawToken={setOpenWithdrawToken} setOpenICOMarketplace={setOpenICOMarketplace} copyAddress={copyAddress} setOpenCreateICO={setOpenCreateICO} />
  </div>

    {
      openAllICO && (
        <ICOMarket array={allICOs} shortenAddress={shortenAddress} handleClick={setOpenAllICO} currency={currency} />
      )
    }
    {openTokenCreator && <TokenCreator createERC20={createERC20} shortenAddress={shortenAddress} setOpenTokenCreator={setOpenTokenCreator} setLoader={setLoader} address={address} connectWallet={connectWallet} PINATA_API_KEY={PINATA_API_KEY} PINATA_SECRET_KEY={PINATA_SECRET_KEY} />}
    {openTokenHistory && <TokenHistory shortenAddress={shortenAddress} setOpenTokenHistory={setOpenTokenHistory} />}
    {openCreateICO && <CreateICO shortenAddress={shortenAddress} setOpenCreateICO={setOpenCreateICO} connectWallet={connectWallet} address={address} createICOSALE={createICOSALE} />}
    {openICOMarketplace && <ICOMarket array={allUserIcos} shortenAddress={shortenAddress} handleClick={setOpenICOMarketplace} currency={currency} />}
    {openBuyToken && <BuyToken address={address} buyToken={buyToken} connectWallet={connectWallet} setOpenBuyToken={setOpenBuyToken} buyICO={buyICO} currency={currency} />}
    {openTransferToken && <TokenTransfer address={address} transferToken={transferToken} connectWallet={connectWallet} setOpenTransferToken={setOpenTransferToken} />}
    {openWithdrawToken && <WidthdrawToken address={address} widthdrawToken={widthdrawToken} connectWallet={connectWallet} setOpenWithdrawToken={setOpenWithdrawToken} />}
    <Footer />
    {loader && <Loader />}
    {/* <Loader /> */}
  </div>;
};

export default index;
