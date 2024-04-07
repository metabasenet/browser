// import { ethers } from "ethers";

// async function getbytecode (params) {
//     const provider = new ethers.JsonRpcProvider("https://test.metabasenet.site/rpc"); 
// let byteCode = await provider.getCode(contractAddress); return byteCode; 
// }

import express from 'express';
import { ethers } from 'ethers';
const app = express();
const PORT = 8081;

export  async function getBytecode(address) {
    const provider = new ethers.JsonRpcProvider("https://test.metabasenet.site/rpc");
    try {
        let byteCode = await provider.getCode(address);
        console.log(byteCode);
        return byteCode;
    } catch (error) {
        console.error('Error fetching bytecode:', error);
        return null;
    }
}

// app.get('/bytecode', async (req, res) => {
//     const address = req.query.address; 
//     console.log(address);
//     if (!address) {
//         return res.status(400).json({ error: 'Contract address is required' });
//     }
//     try {
//         const bytecode = await getBytecode(address);
//         console.log(bytecode);
//         res.status(200).json({ bytecode });
//     } catch (error) {
//         console.error('Error handling request:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});