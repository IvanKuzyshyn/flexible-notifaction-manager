import axios from 'axios';

// TODO refactor with provided server data
const HTTP = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export default HTTP;
