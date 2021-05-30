const { create } = require('ipfs-http-client')
    // const ipfs = async() => {
    //         const repoPath = `ipfs-${Math.random()}`
    //         const ipfs = await Ipfs.create({ repo: repoPath, port: 5001, protocol: 'https' })
    //     }
    // const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
export default ipfs;