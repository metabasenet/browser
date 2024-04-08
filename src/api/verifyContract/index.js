import request from '@/utils/request'
const API = {
    VERTITY_CONTRACT_URL:'/contractVertify/getByContractAddress',
    BLOCK_DETAIL_URL:'/block/getByNumber'
  }
export const getContractDetail = (address) => {
  const url = `${API.VERTITY_CONTRACT_URL}?contractAddress=${address}`;
  return request.get(url);
};
