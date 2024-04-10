import request from '@/utils/request'
const API = {
    TOKEN_PAGE_URL:'/contract/page',
    TOKEN_INQUIRE_URL:'/contract/getContractByAddress',
    TOKEN_CONTACT_URL:'/contract/getContactTransationByContractAddress',
    TOKEN_ALLCONTACT_URL:'/contract/getAllContactTransation'
    // 127.0.0.1:9003/contract/getContactTransationByContractAddress?contractAddress=0x402948BA3602dDBA96c2325712f347659dF520Cd&page=1&pageSize=4
  }
export const getTokenPage = (page, pageSize) => {
  const url = `${API.TOKEN_PAGE_URL}?page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};
export const getContactPage = (address,page, pageSize) => {
  const url = `${API.TOKEN_CONTACT_URL}?contractAddress=${address}&page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};
export const getTokenInquire = (address) => {
  const url = `${API.TOKEN_INQUIRE_URL}?address=${address}`;
  return request.get(url);
};
export const getAllContact = (page, pageSize) => {
  const url = `${API.TOKEN_ALLCONTACT_URL}?page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};