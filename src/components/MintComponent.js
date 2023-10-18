import { useAccount } from 'wagmi';
import abi from '../ContractDetails/ContractABI';
import { ethers } from 'ethers';

const  MintComponent = ({ImageHash})=>{
    const { address, isConnected } = useAccount();

const handleMint = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first.');
      return;
    }
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    const contractAddress = "0xa27B158365e14B96Afd49Cc7C88eBdE852416219";
    console.log(abi)
    /*                    Create Contract Instance here   */ 
    // const NftContract = new ethers.Contract(contractAddress, abi, signer);
    // const receipt = await NftContract.mintToken(address, ImageHash);
    // const tokenIdEvent = receipt.events?.find(e => e.event === "tokenCreated");
    // if(tokenIdEvent) {       
    //     const tokenId = tokenIdEvent.args[0].toString();
    // }

    const mintData = {  
      walletId: address,
      nftMint: tokenId,
    };
    try {
      const backendResponse = await axios.post(
        'http://localhost:3001/storeWallet',
        mintData,
      );
      if (backendResponse.status === 200) {
        alert("Data successfully sent to the backend!");
      } else {
        alert("Failed to send data to the backend.");
      }
    } catch (error) {
      console.error("Error sending data to the backend:", error);
      alert(`Failed to send data to the backend: ${error.message}`);
    }
    alert(`Minting for address ${address}`);
}
    return (
        <button onClick={handleMint} style={{
            padding: '10px 20px',
            backgroundColor: '#34D399',
            borderRadius: '8px',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s'
          }}
            onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.target.style.transform = 'scale(1)'}
          >
            Mint NFT
          </button>
    )
  }

  export default MintComponent;