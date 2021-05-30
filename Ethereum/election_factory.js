import web3 from './web3';
import ElectionFactory from './Build/ElectionFact.json';

const instance = new web3.eth.Contract(
    JSON.parse(ElectionFactory.interface),
    '0x51ac40ae4333BaD51308c376383805De1Dc06EA3'
);

export default instance;