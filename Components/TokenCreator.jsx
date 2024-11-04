import React from "react";

import UploadLogo from "../Components/UploadLogo";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";

const TokenCreator = ({
  createERC20, shortenAddress, setOpenTokenCreator, setLoader, address, connectWallet, PINATA_API_KEY, PINATA_SECRET_KEY
}) => {
  const [imageURL, setImageURL] = useState();
  const [token, setToken] = useState({
    name: "",
    Symbol: "",
    supply: "",
  })
  return <div id={"myModal"} className={"modal"}>
    <div className="modal-content">
      <span onClick={() => setOpenTokenCreator(false)} className="close">
        &times;
      </span>
      <h2 style={{ marginBottom: "1rem" }}>Create Token</h2>

      <UploadLogo imageURL={imageURL} setImageURL={setImageURL} setLoader={setLoader} PINATA_API_KEY={PINATA_API_KEY} PINATA_SECRET_KEY={PINATA_SECRET_KEY} />

      <div className="input-Container">
        <Input placeholder={"Name"} handleChange={(e) => setToken({ ...token, name: e.target.value })} />
        <Input placeholder={"Symbol"} handleChange={(e) => setToken({ ...token, symbol: e.target.value })} />
        <Input placeholder={"Supply"} handleChange={(e) => setToken({ ...token, supply: e.target.value })} />
      </div>
      <div className="button-box" style={{ marginTop: "1rem" }}>
        {address ? (
          <Button name="Create Token" handleClick={() => createERC20(token, address, imageURL)} />
        ) : (
          <Button name="Connect Wallet" handleClick={() => connectWallet()} />
        )}
      </div>
    </div>
  </div>;
};

export default TokenCreator;
