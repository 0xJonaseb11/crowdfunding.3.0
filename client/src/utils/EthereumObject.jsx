import React from "react";

import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import Crowdfunding from "../contract/Crowdfunding.json";
import { error } from "console";

let provider;
let signer;
let contract;
let contractAddress = "";

const loadWeb3 = async() => {
    const detectProvider = await detectEthereumProvider();

    if (detectProvider) {
        provider= new ethers.poviders.Web3Provider(detectProvider);

        await detectedProvider.request({method: "eth_requestAccounts"});
        signer = provider.getSigner();

        contract = new ethers.contract.(contractAddress, Crowdfunding, signer);
    } else {
        console.error("Please install metamask!!", error);
    }
};

const getContract = () => contract;
const getProvider = () => provider;
const getSigner = () => signer;

export { loadWeb3, getContract, getProvider, getSigner};