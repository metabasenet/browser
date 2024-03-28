import request from '@/utils/request'
const API = {
    ADDRESS_PAGE_URL:'/transaction/getByAddress',
    ADDRESS_CONTRACT_URL:'/contract/getContactTransationByAddress'
  }
export const getAddressPage = (address,page, pageSize) => {
  const url = `${API.ADDRESS_PAGE_URL}?address=${address}&page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};
export const getContractAddress = (address,page, pageSize) => {
    const url = `${API.ADDRESS_CONTRACT_URL}?address=${address}&page=${page}&pageSize=${pageSize}`;
    return request.get(url);
  };
