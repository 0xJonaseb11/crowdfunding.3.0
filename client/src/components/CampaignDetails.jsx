import React, {useState, useEffect} from "react";
import {getContract, getWeb3} from "../utils/EthereumObject";
import Donate from "./Donate";
import {Box, Typography, Paper} from "@mui/material";
import { ethers } from "ethers";

const CampaignDetails = ({campaignId}) => {
    const [campaign, setCampaign] = useState(null);

    useEffect(() => {
        const loadCampaign = async() => {
            const contract = getContract();
            const campaign = await contract.campaigns(campaignId);

            setCampaign(campaign);
        };

        loadCampaign();
    }, [campaignId]);

    return (
        <Paper sx={{padding: 3}}>
      <Typography variant="h4" gutterBottom>
        {campaign.title}
        </Typography>
      <Typography variant="body1" gutterBottom>
        {campaign.description}
        </Typography>
      <Typography variant="body2">
        Target: {ethers.utils.formatEther(campaign.target)} ETH
        </Typography>
      <Typography variant="body2">
        Collected: {ethers.utils.formatEther(campaign.amountCollected)} ETH
        </Typography>
        <Donate campaignId={campaignId}/>
        </Paper>
    );
}

export default CampaignDetails