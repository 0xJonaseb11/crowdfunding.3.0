import React, {useState, useEffect} from "react";
import {Card, CardContent, Typography, Button, Grid} from "@mui/material"
import { ethers } from "ethers";

const CampaignList = ({campaigns}) => {
    return (
        <Grid container spacing={3}>
            {campaigns.map((campaign, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                        <CardContent>
                            <Typography varian></Typography>
                        </CardContent>
                    </Card>
                    </Grid>
            ))}

        </Grid>

    );
}