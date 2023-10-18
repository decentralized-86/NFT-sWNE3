import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WalletTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/getWallets');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching wallet addresses:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Wallet Address</th>
          <th>Token ID</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.walletId}</td>
            <td>{item.nftMint}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WalletTable;
