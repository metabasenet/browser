import request from '@/utils/request'
const API = {
    TRANSACION_PAGE_URL:'/transaction/page',
    TRANSACION_DETAIL_URL:'/transaction/getByHash',
    TRANSACION_LOGS_URL:'/transaction/getTransactionLogs',
    TRANSACTION_RECORDS_URL: '/market/transcationCountByDay',
    TRANSACTION_FEE_URL: '/market/lastedTransactionFee',
    TRANSACTION_COUNT_URL: '/market/lastedTranscationCount',
    TRANSACTION_INTERNAL_URL: '/transaction/getPlatformTransactionInfo',
    TRANSACTION_PLATFORM_URL: '/transaction/getPlatformTransactionByAddress',
    TRANSATION_INTERNALTEST_URL: '/transaction/getInternalTransactionInfo',
    TRANSATION_FUNCTIONNAME_URL: '/transaction/getMethdNameByHash'
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
export const getTransactionLogs = (hash, page, pageSize) => {
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
};
export const getTransactionInternal = (triHash) => {
  const url = `${API.TRANSACTION_INTERNAL_URL}?transactionHash=${triHash}`
  return request.get(url);
}
export const getTransactionPlaform = (address, currentPage, pageSize) => {
  const url = `${API.TRANSACTION_PLATFORM_URL}?address=${address}&page=${currentPage}&pageSize=${pageSize}`
  return request.get(url);
}
export const getInternalTransactionTest = (transactionHash) => {
  const url = `${API.TRANSATION_INTERNALTEST_URL}?transactionHash=${transactionHash}`
  return request.get(url);
}
export const getTransactionFunctionName = (transactionHash) => {
  const url = `${API.TRANSATION_FUNCTIONNAME_URL}?hash=${transactionHash}`
  return request.get(url);
}