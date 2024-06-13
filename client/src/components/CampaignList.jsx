import React from "react";
import {Card, CardContent, Typography, Button, Grid} from "@mui/material"
import { ethers } from "ethers";

const CampaignList = ({campaigns}) => {
    return (
        <Grid container spacing={3}>
            {campaigns.map((campaign, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{campaign.title}</Typography>
                            <Typography variant="body2" color="secondary">{campaign.description}</Typography>
                            <Typography variant="body2">
                                Target: {ethers.utils.formatEther(campaign.target.toString())} ETH
                            </Typography>
                            <Typography variant="body2">
                                Colleuct: {ethers.utils.formatEther(campaign.amountCollected.toString())} ETH
                            </Typography>
                            <Typography variant="body2">
                                Deadline: {new Date(campaign.deadline * 1000).toLocaleString()}
                            </Typography>

                            <Button variant="contained" color="primary">Donate</Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default CampaignList