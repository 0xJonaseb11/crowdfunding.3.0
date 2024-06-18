import React, {useState} from "react";
import { getContract, getSigner } from "../utils/EthereumObject";
import { TextField, Box, Button} from "@mui/material";
import { ethers } from "ethers";

const Donate = ({campaignId}) => {
    const [amount, setAmount] = useState("");

    const donate = async() => {
        const contract = getContract();
        const signer = getSigner();
        const tx = await contract.donateToCampaign(campaignId, {
            value: ethers.utils.parseEther(amount)
        });
        await tx.await();
    };

    return (
        <Box sx={{marginTop: 2, py:10}}>
            <TextField 

            className="w-full flex items-center justify-center my-5"
            label="amount"
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
            onClick={donate}>Donate</Button>
        </Box>
    );
}

export default Donate