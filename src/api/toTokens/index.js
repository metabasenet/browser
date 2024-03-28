import request from '@/utils/request'
const API = {
    TOKEN_PAGE_URL:'/contract/page',
    TOKEN_INQUIRE_URL:'/contract/getContractByAddress',
    TOKEN_CONTACT_URL:'/contract/getContactTransationByAddress',
    TOKEN_ALLCONTACT_URL:'/contract/getAllContactTransation'
  }
export const getTokenPage = (page, pageSize) => {
  const url = `${API.TOKEN_PAGE_URL}?page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};
export const getContactPage = (address,page, pageSize) => {
  const url = `${API.TOKEN_CONTACT_URL}?address=${address}&page=${page}&pageSize=${pageSize}`;
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