import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/marlondev-me/json-server-finances/',
});

export default api;
