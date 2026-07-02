import axios from "axios";

const BASE_URL = "https://backend-code-3-ajzx.onrender.com";

// Employee
export const getinformation = () => {
  return axios.get(`${BASE_URL}/api/v1/getAll`);
};

export const adduser = (user) => {
  return axios.post(`${BASE_URL}/api/v1/saveEmp`, user);
};

// Software
export const addsoftware = (Sdata) => {
  return axios.post(`${BASE_URL}/software/saveData`, Sdata);
};

// Medical
export const addmedical = (Mdata) => {
  return axios.post(`${BASE_URL}/medical/save`, Mdata);
};

// Banking
export const addbanking = (Bdata) => {
  return axios.post(`${BASE_URL}/banking/save`, Bdata);
};

// Teaching
export const addteaching = (Tdata) => {
  return axios.post(`${BASE_URL}/teaching/save`, Tdata);
};

// Get Software Data
export const getsoftwaredata = () => {
  return axios.get(`${BASE_URL}/software/get`);
};

// Get Medical Data
export const getmedicaldata = () => {
  return axios.get(`${BASE_URL}/medical/get`);
};

// Get Banking Data
export const getbankingdata = () => {
  return axios.get(`${BASE_URL}/banking/get`);
};

// Get Teaching Data
export const getteachingdata = () => {
  return axios.get(`${BASE_URL}/teaching/get`);
};