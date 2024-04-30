import request from '@/utils/request'
const API = {
    HOME_SEARCH_URL:'/block/search',
    // BLOCK_DETAIL_URL:'/block/getByNumber'
  }
export const getSearchInfo = (searchInfo, type) => {
  const url = `${API.HOME_SEARCH_URL}?searchInfo=${searchInfo}&type=${type}`;
  return request.get(url);
};
// export const getBlockDetail = (blockNumber) => {
//   const url = `${API.BLOCK_DETAIL_URL}?blockNumber=${blockNumber}`;
//   return request.get(url);
// };