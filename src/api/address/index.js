import request from '@/utils/request'
const API = {
    ADDRESS_PAGE_URL:'/transaction/getByAddress',
    ADDRESS_CONTRACT_URL:'/contract/getContactTransationByAddress',
    ADDRESS_BALANCE_URL:'/balance/getByAddress',
    ADDRESS_SELECTTOKEN_URL:'/contract/selectTokenByAddress',
  }
export const getAddressPage = (address,page, pageSize) => {
  const url = `${API.ADDRESS_PAGE_URL}?address=${address}&page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};
export const getContractAddress = (address,page, pageSize) => {
    const url = `${API.ADDRESS_CONTRACT_URL}?address=${address}&page=${page}&pageSize=${pageSize}`;
    return request.get(url);
  };
  export const getBalanceAddress = (address) => {
    const url = `${API.ADDRESS_BALANCE_URL}?address=${address}`;
    return request.get(url);
  };
  export const getselectAddress = (address) => {
    const url = `${API.ADDRESS_SELECTTOKEN_URL}?address=${address}`;
    return request.get(url);
  };
