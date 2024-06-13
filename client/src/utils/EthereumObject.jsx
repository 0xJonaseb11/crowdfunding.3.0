import React from "react";

import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import Crowdfunding from "../contract/Crowdfunding.json";

let provider;
let signer;
let contract;
let contractAddress = "0xa9d56A50Ee158B8fEe0f4780dD1a15fb95217870";

const loadWeb3 = async() => {
    const detectedProvider = await detectEthereumProvider();

    if (detectedProvider) {
        provider= new ethers.poviders.Web3Provider(detectedProvider);

        await detectedProvider.request({method: "eth_requestAccounts"});
        signer = provider.getSigner();

        contract = new ethers.Contract(contractAddress, Crowdfunding.abi, signer);
    } else {
        console.error("Please install metamask!!");
    }
};

const getContract = () => contract;
const getProvider = () => provider;
const getSigner = () => signer;

export { loadWeb3, getContract, getProvider, getSigner};