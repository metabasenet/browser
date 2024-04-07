import request from '@/utils/request'
const API = {
    VERTITY_CONTRACT_URL:'/contractVertify/getByContractAddress',
    BLOCK_DETAIL_URL:'/block/getByNumber'
    // 39.106.251.173:9003/contractVertify/getByContractAddress?contractAddress=0x005A89549f5504443Ba1242259b4149e4F21ceA7
  }
export const getContractDetail = (address) => {
  const url = `${API.VERTITY_CONTRACT_URL}?contractAddress=${address}`;
  return request.get(url);
};
 