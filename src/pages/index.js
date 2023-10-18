import axios from 'axios';
import { useState } from 'react';
import UploadComponent from "../components/UploadComponent";
import MintComponent from "../components/MintComponent";
import WalletTable from '@/components/WalletAddresses';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [ImageHash, setImageHash] = useState(null);
  const [selectedImage, setselectedImage] = useState(null);
  
 
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} style={{ backgroundColor: '#F3F4F6' }}>
      <ConnectButton style={{ marginBottom: '20px' }} />
      <UploadComponent setImageHash={setImageHash} setselectedImage={setselectedImage} selectedImage={selectedImage}/>
      <MintComponent ImageHash={ImageHash} selectedImage={selectedImage}/>
    </main>
  )
}
