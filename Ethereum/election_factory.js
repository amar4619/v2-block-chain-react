import web3 from './web3';
import ElectionFactory from './Build/ElectionFact.json';

const instance = new web3.eth.Contract(
    JSON.parse(ElectionFactory.interface),
    'NEED TO ADD THE ADDRESS YOU DEPLOY'
);

export default instance;
