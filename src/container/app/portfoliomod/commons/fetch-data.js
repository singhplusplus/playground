import { json, csv } from 'd3';

export const fetchCSVData = async (url) => {
  return await csv(url);
};

export const fetchJSONData = async (url) => {
  return await json(url);
};