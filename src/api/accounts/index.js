import request from '@/utils/request'
const API = {
    BALANCE_PAGE_URL:'/balance/page',
    BLOCK_DETAIL_URL:'/block/getByNumber'
  }
export const getBalancePage = (page, pageSize) => {
  const url = `${API.BALANCE_PAGE_URL}?page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};
export const getBlockDetail = (blockNumber) => {
  const url = `${API.BLOCK_DETAIL_URL}?blockNumber=${blockNumber}`;
  return request.get(url);
};