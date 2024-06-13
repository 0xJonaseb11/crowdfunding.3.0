import React, {useState, useEffect} from "react";
import {TextField, Button, Typography} from "mui/material";
import { ethers } from "ethers";

const CampaignForm = ({contract, provider}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    cost [target, setTarget] = useState("");
    const [image, setImage] = useState("");

    const createCampaign = async() => {
        if (!contract) return;

        const signer = provider.getSigner();
        const tx = await contract.connect(signer).createCampaign(
            await signer.getAddress(),
            title,
            description,
            ethers.utils.parseUnits(target, "ether"),
            new Date(deadline).getTime() / 1000,
            image
        );

        
    }
};