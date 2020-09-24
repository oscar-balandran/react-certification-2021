import { useState, useQuery } from 'react';
import axios from 'axios';

const STR_SEARCH_KEY = 'strSearch';
// export const API_KEY = 'AIzaSyBQbpBDRgsPs2vHcOO_-W0BkKzpixZbDJo';
// export const API_KEY = 'AIzaSyCCUuRpDMc8Vfr7RyQQrHrRkOWPx33l5TM'
export const API_KEY = 'AIzaSyAUEFPWnTJMJI5CpOSvkMyy-2dn5bUcMZY';
export const API_URL = 'https://www.googleapis.com/youtube/v3';
export const API_URL_SEARCH = 'https://www.googleapis.com/youtube/v3/search';

export const search2 = async (strSearch) => {
  const res = await fetch(
    `${API_URL_SEARCH}?part=snippet&maxResults=50&q=${strSearch}&key=${API_KEY}`
  );
  const resp = await res.json();
  return resp;
};

export const searchVideos = (strSearch = '') => {
  const instance = axios.create({
    baseUrl: 'https://www.googleapis.com/youtube/v3',
  });

  return instance
    .get('/search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: API_KEY,
        q: strSearch,
      },
    })
    .then((res) => res.data.data || []);
};

export const useSearchVideos = () => {
  const [strSearch] = useState();
  console.log(strSearch);
  return useQuery(STR_SEARCH_KEY, searchVideos(strSearch));
};
