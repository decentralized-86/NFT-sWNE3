 import axios  from "axios";
 
 const UploadComponent = ({setImageHash,setselectedImage,selectedImage})=>{

const  handleImageChange = async (e) => {
    const file = e.target.files[0];
    console.log("file", file);
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setselectedImage(reader.result); 
        };
        reader.readAsDataURL(file); 
        const formData = new FormData();
        formData.append('file', file);
        try {
            const resFile = await axios.post(
                "https://api.pinata.cloud/pinning/pinFileToIPFS",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        pinata_api_key: "dbf24bccf7acb8afc1c7",
                        pinata_secret_api_key: "1e984160f5a1963086e7380f910f48df0fd89d5f75a2d86181e3065a2d4e67db"
                    }
                }
            );
            console.log(resFile);
            const IpfsHash = `ipfs://${resFile.data.IpfsHash}`;
            console.log("got the hash " + IpfsHash);
            setImageHash(IpfsHash);
        } catch (error) {
            console.error('Error uploading to Pinata:', error);
        }
    }
}
    return(
        <div style={{ marginBottom: '20px', position: 'relative' }}>
        <input type="file" onChange={handleImageChange} style={{ display: 'none' }} id="fileInput" />
        <label htmlFor="fileInput" style={{
          padding: '10px 20px',
          backgroundColor: '#4F46E5',
          borderRadius: '8px',
          color: '#ffffff',
          cursor: 'pointer',
          boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s'
        }}
          onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={e => e.target.style.transform = 'scale(1)'}
        >
          Upload Image
        </label>
        {selectedImage && <img src={selectedImage} alt="Uploaded preview" width={200} style={{ marginTop: '15px', borderRadius: '8px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.1)' }} />}
      </div>
    )

}

export default UploadComponent;