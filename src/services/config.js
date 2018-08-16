import axios from 'axios';

const BASE_URL = "https://yts.am/api/v2/";

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;