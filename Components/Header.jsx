import React, { useState, useEffect } from "react";

import Button from "./Button";

const Header = ({ accountBalance,
  setAddress,
  address,
  connectWallet,
  ICO_MARKETPLACE_ADDRESS,
  shortenAddress,
  setOpenAllICO,
  openAllICO,
  setOpenTokenCreator,
  openTokenCreator,
  setOpenTokenHistory,
  openTokenHistory,
  setOpenICOMarketplace,
  openICOMarketplace }) => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setIsMetamaskInstalled(true);

      window.ethereum.on("accountsChanged", handleAccountsChanged);
    }

    return () => {
      if (typeof window.ethereum !== "undefined") {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      }
    }
  }, [address])

  const handleAccountsChanged = (accounts) => {
    setAddress(accounts[0])
  }

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <a href="/">
            ICO. <span>MARKET</span>
          </a>
        </div>

        <input type="checkbox" name="" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a onClick={() => openICOMarketplace ? setOpenICOMarketplace(false) : setOpenICOMarketplace(true)}>ICO Marketplace</a>
          </li>
          <li>
            <a onClick={() => openAllICO ? setOpenAllICO(false) : setOpenAllICO(true)}>Created ICO</a>
          </li>
          <li>
            <a onClick={() => openTokenHistory ? setOpenTokenHistory(false) : setOpenTokenHistory(true)}>History</a>
          </li>
          <li>
            <a onClick={() => openTokenCreator ? setOpenTokenCreator(false) : setOpenTokenCreator(true)}>Create Token</a>
          </li>
          {
            address ? (
              <li>
                <Button name={`${shortenAddress(address)}: ${accountBalance?.slice(0,5)}`} />
              </li>
            ) : (
              <li>
                <Button name="Connect Wallet" handleClick={connectWallet} />
              </li>
            )
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
