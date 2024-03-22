import request from '@/utils/request'
const API = {
    BLOCK_PAGE_URL:'/block/page',
    BLOCK_DETAIL_URL:'/block/getByNumber'
  }
export const getBlockPage = (page, pageSize) => {
  const url = `${API.BLOCK_PAGE_URL}?page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};
export const getBlockDetail = (blockNumber) => {
  const url = `${API.BLOCK_DETAIL_URL}?blockNumber=${blockNumber}`;
  return request.get(url);
};