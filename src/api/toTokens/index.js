import request from '@/utils/request'
const API = {
    TOKEN_PAGE_URL:'/contract/page',
    TOKEN_INQUIRE_URL:'/contract/getContractByAddress',
    TOKEN_CONTACT_URL:'/contract/getContactTransationByContractAddress',
    TOKEN_ALLCONTACT_URL:'/contract/getAllContactTransation',
    TOKEN_GETBALANCE_URL:'/contract/getContactBalance',
    TOKEN_TRANSATION_URL:'/contract/getContractTransationCountByAddress',
  }
export const getTokenPage = (page, pageSize) => {
  const url = `${API.TOKEN_PAGE_URL}?page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};
export const getContactPage = (address,page, pageSize) => {
  const url = `${API.TOKEN_CONTACT_URL}?contractAddress=${address}&page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};
export const getContactBalance = (address,page, pageSize) => {
  const url = `${API.TOKEN_GETBALANCE_URL}?contractAddress=${address}&page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};
export const getTokenInquire = (address) => {
  const url = `${API.TOKEN_INQUIRE_URL}?address=${address}`;
  return request.get(url);
};
export const getAllContact = (page, pageSize,timeout = 10000) => {
  const url = `${API.TOKEN_ALLCONTACT_URL}?page=${page}&pageSize=${pageSize}`;
  const config = {
    timeout: timeout 
  };
  return request.get(url,config);
};
export const getContractTransationCount = (address) => {
  const url = `${API.TOKEN_TRANSATION_URL}?contractAddress=${address}`;
  return request.get(url);
};