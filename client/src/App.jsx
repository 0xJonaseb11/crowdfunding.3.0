import React, { useState, useEffect } from 'react';
import { loadWeb3 } from './utils/EthereumObject';
import CreateCampaign from './components/CreateCampaign';
import CampaignList from './components/CampaignList';
import CampaignDetails from './components/CampaignDetails';
import { Container, Typography } from '@mui/material';

const App = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  useEffect(() => {
    loadWeb3();
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Crowdfunding DApp</Typography>
      <CreateCampaign />
      <CampaignList onCampaignSelect={setSelectedCampaign} />
      {selectedCampaign !== null && <CampaignDetails campaignId={selectedCampaign} />}
    </Container>
  );
};

export default App;
