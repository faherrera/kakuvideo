import axios from 'axios';

const BASE_URL = "https://yts.am/api/v2/";

const API = axios.create({
  baseURL: "https://yts.am/api/v2/",
});

export default API;