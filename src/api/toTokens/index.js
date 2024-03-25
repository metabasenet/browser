import request from '@/utils/request'
const API = {
    TOKEN_PAGE_URL:'/contract/page',
    TOKEN_DETAIL_URL:'/contract/getByAddress'
  }
export const getTokenPage = (page, pageSize) => {
  const url = `${API.TOKEN_PAGE_URL}?page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};
export const getTokenDetail = (address) => {
  const url = `${API.TOKEN_DETAIL_URL}?address=${address}`;
  return request.get(url);
};