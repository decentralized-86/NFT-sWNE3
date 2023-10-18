const express = require('express');
const mongoose = require("mongoose");
// const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(express.json());

mongoose.connect("mongodb+srv://Man0409:Man0409@wne3test.ctctp1v.mongodb.net/?retryWrites=true&w=majority");
const walletAddress = require("./WalletAddress");

app.post('/storeWallet', async (req, res) => {
    try {
        const { nftMint, walletId } = req.body;
        const newWalletAddress = new walletAddress({
            nftMint,
            walletId
        });
        await newWalletAddress.save();
        res.status(200).send('Wallet address stored successfully.');
    } catch (error) {
        console.error("Error storing wallet address:", error);
        res.status(500).send('Internal server error.');
    }
});

app.get('/getWallets', async (req, res) => {
    try {
        const addresses = await walletAddress.find({});
        res.status(200).json(addresses);
    } catch (error) {
        console.error("Error fetching wallet addresses:", error);
        res.status(500).send('Internal server error.');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
