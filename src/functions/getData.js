import axios from 'axios';

const URL = 'https://my-json-server.typicode.com/norton794/desafio_m2_chart/products';
export const getData = () => axios(URL);
