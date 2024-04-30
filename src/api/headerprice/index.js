import request from '@/utils/request'
const API = {
    HEADER_PRICE_URL:'/market/getPrice',
  }
export const getPriceInfo = () => {
  const url = `${API.HEADER_PRICE_URL}`;
  return request.get(url);
};