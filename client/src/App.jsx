import React, {useState, useEffect} from "react";
import { ethers } from "ethers";
import {loadWeb3} from "./utils/EthereumObject"
import {Container, AppBar, Typography, Button, Grid} from "@mui/material";
import CampaignForm from "./components/CampaignForm";
import CampaignList from "./components/CampaignList";
import { contractAddress, contractABI} from "./contract/Crowdfunding.json";

const App = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const loadProvider = async() => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.contract(contractAddress, contractABI, signer);

      setProvider(provider);
      setSigner(signer);
      setContract(contract);
      setCampaigns(contract);
    };

    const loadCampaigns = async(contract) => {
      const campaigns = await contract.getAllCampaigns();
      setCampaigns(campaigns);
    };

    if (window.ethereum) {
      loadProvider(provider);
    }
  }, []);

  return (
    <Container>
      <AppBar position="static">
        <Typography variant="h6" align="center">
          Crowdfunding dapp
        </Typography>
      </AppBar>

      <Grid container spacing={3} style={{marginTop: 20}}>
        <CampaignForm contract={contract} provider={provider}></CampaignForm>
      </Grid>
      <Grid item xs={12} md={8}>
        <CampaignList campaigns={campaigns}/>
      </Grid>
    </Container>
  )
};

export default App