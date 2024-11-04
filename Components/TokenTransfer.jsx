import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

import Input from "./Input";
import Button from "./Button";

const TokenTransfer = ({
    address, transferTokens, connectWallet, setOpenTransferToken
}) => {
    const [transferTokenData, setTransferTokenData] = useState({
        address: "",
        tokenAdd: "",
        amount: "",
    })
    return (
        <div className="modal">
            <div className="modal-content">
                <span onClick={() => setOpenTransferToken(false)} className="close">
                    &times;
                </span>
                <h2>Token Transfer</h2>
                <div className="input-Container" style={{ marginTop: "1rem" }}>
                    <Input placeholder={"Address"} handleChange={(e) => setTransferTokenData({ ...transferTokenData, address: e.target.value })} />

                    <Input placeholder={"Token Address"} handleChange={(e) => setTransferTokenData({ ...transferTokenData, tokenAdd: e.target.value })} />

                    <Input placeholder={"Amount"} handleChange={(e) => setTransferTokenData({ ...transferTokenData, amount: e.target.value })} />
                </div>
                <div className="button-box" style={{ marginTop: "1rem" }}>
                    {address ? (
                        <Button name="Token Transfer" handleClick={() => transferTokens(transferTokenData)} />
                    ) : (
                        <Button name="Connect Wallet" handleClick={() => connectWallet()} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TokenTransfer;