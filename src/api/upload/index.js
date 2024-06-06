import request from "@/utils/request";
const API = {
  VERTITY_UPLOAD_URL: "/contractVertify/uploadFiles",
  GET_FILE_URL: "/contractVertify/getFileInfo",
  DELETE_FILE_URL: "/contractVertify/deleteFile",
  SUBMIT_FILE_URL: "/contractVertify/updateContractCompileInfo",
};
export const getVertityUpload = (contractName, address, files) => {
  const formData = new FormData();
  formData.append("files", files.file);
  const url = `${API.VERTITY_UPLOAD_URL}?contractName=${contractName}&contractAddress=${address}`;
  return request.post(url, formData);
};
export const getFileInfo = (address) => {
  const url = `${API.GET_FILE_URL}?contractAddress=${address}`;
  return request.get(url);
};
export const deleteFile = (address, fileName) => {
  const url = `${API.DELETE_FILE_URL}?contractAddress=${address}&fileName=${fileName}`;
  return request.post(url);
};
export const submissionContract = (data) => {
  const url = `${API.SUBMIT_FILE_URL}`;
  return request.post(url, data);
};
