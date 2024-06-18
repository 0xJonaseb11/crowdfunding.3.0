import React, { useState } from "react";
import { getContract } from "../utils/EthereumObject";
import { TextField, Box, Button } from "@mui/material";
import { ethers } from "ethers";

const Donate = ({ campaignId }) => {
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");

    const donate = async () => {
        try {
            if (!amount || isNaN(amount) || Number(amount) <= 0) {
                setError("Please enter a valid amount");
                return;
            }

            const contract = getContract();
            const value = ethers.utils.parseEther(amount);

            const tx = await contract.donateToCampaign(campaignId, { value });
            await tx.wait();
            setError("Donation done successfully!"); // Clear error message after successful transaction
        } catch (e) {
            console.error(e);
            setError("Transaction failed. Please check the console for more details.");
        }
    };

    return (
        <Box sx={{ marginTop: 2, py: 10 }}>
            <TextField
                className="w-full flex items-center justify-center my-5"
                label="Amount"
                value={amount}
                fullWidth
                margin="normal"
                onChange={(e) => setAmount(e.target.value)}
                sx={{
                    '& .MuiInputBase-root': { color: 'white' },
                    '& .MuiInputLabel-root': { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'white' },
                        '&:hover fieldset': { borderColor: 'white' },
                        '&.Mui-focused fieldset': { borderColor: 'white' },
                    },
                }}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'aqua',
                    width: '100%',
                    borderRadius: '999px',
                    color: 'black',
                    '&:hover': {
                        backgroundColor: 'darkcyan',
                        color: 'white',
                        marginBottom: "10px"
                    },
                }}
                onClick={donate}
            >
                Donate
            </Button>
        </Box>
    );
};

export default Donate;
