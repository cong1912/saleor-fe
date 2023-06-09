import axios from 'axios';
import { client } from '../lib/client';

// Get data form server
export const getData = async <T>(url: string): Promise<T> => {
  const token = JSON.parse(localStorage.getItem('token') || 'null');
  const res = await axios.get<T>(url, { headers: { Authorization: token } });
  return res.data;
};

export const multiFetcher = async (...urlArr: string[]) =>
  Promise.allSettled(urlArr.map((url) => getData(url)));

export const fetcher = (query: string, variable: {}) => {
  console.log(variable, query);
  return client.request(query, variable);
};
