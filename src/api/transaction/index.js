import request from '@/utils/request'
const API = {
    TRANSACION_PAGE_URL:'/transaction/page',
    TRANSACION_DETAIL_URL:'/transaction/getByHash',
    TRANSACION_LOGS_URL:'/transaction/getTransactionLogs',
    TRANSACTION_RECORDS_URL: '/market/transcationCountByDay',
    TRANSACTION_FEE_URL: '/market/lastedTransactionFee',
    TRANSACTION_COUNT_URL: '/market/lastedTranscationCount',
  }
  export const getTransactionPage = (page, pageSize, timeout = 10000) => { 
    const url = `${API.TRANSACION_PAGE_URL}?page=${page}&pageSize=${pageSize}`;
    const config = {
      timeout: timeout 
    };
    return request.get(url, config);
  };
export const getTransactionDetail = (hash) => {
  const url = `${API.TRANSACION_DETAIL_URL}?hash=${hash}`;
  return request.get(url);
};
export const getTransactionLogs = (hash,page, pageSize) => {
  const url = `${API.TRANSACION_LOGS_URL}?hash=${hash}&page=${page}&pageSize=${pageSize}`;
  return request.get(url);
};
export const getTransactionFee = () => {
  const url = `${API.TRANSACTION_FEE_URL}`
  return request.get(url);
};
export const getTransactionCount = () => {
  const url = `${API.TRANSACTION_COUNT_URL}`
  return request.get(url);
};
export const getTransactionRecords = () => {
  const url = `${API.TRANSACTION_RECORDS_URL}`
  return request.get(url);
}