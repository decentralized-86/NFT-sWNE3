const mongoose = require("mongoose");

const NftSchema = new mongoose.Schema({
    nftMint: {
        type: String,        // You can use String to store the NFT's unique identifier or hash
        required: true,
        unique: true        // Assuming each NFT minted will have a unique identifier
    },
    walletId: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('WalletAddresses', NftSchema);
