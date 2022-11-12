import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});
