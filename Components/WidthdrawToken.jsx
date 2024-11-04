import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

import Input from "./Input";
import Button from "./Button";

const WidthdrawToken = ({address, widthdrawToken, connectWallet, setOpenWithdrawToken}) => {

  const [widthdrawQuantity, setwidthdrawQuantity] = useState({
    token: "",
    amount: ""
  })
  return (
    <div className="modal">
        <div className="modal-content">
            <span onClick={() => setOpenWithdrawToken(false)} className="close">
                &times;
            </span>
            <h2>Widthdraw Token</h2>
            <div className="input-Container" style={{ marginTop: "1rem" }}>
                <Input placeholder={"Token Address"} handleChange={(e) => setwidthdrawQuantity({ ...widthdrawQuantity, address: e.target.value })} />

                <Input placeholder={"Quantity"} handleChange={(e) => setwidthdrawQuantity({ ...widthdrawQuantity, amount: e.target.value })} />

                
            </div>
            <div className="button-box" style={{ marginTop: "1rem" }}>
                {address ? (
                    <Button name="Token Transfer" handleClick={() => widthdrawToken(widthdrawQuantity)} />
                ) : (
                    <Button name="Connect Wallet" handleClick={() => connectWallet()} />
                )}
            </div>
        </div>
    </div>
);
};

export default WidthdrawToken;
