import { useState, useEffect, useContext } from 'react';
import VideosContext from '../../state/VideosContext';
import { API_KEY, API_URL_SEARCH } from '../apiYoutube';

const maxResults = 10;
const part = 'snippet,id';
const type = 'video';

const url = `${API_URL_SEARCH}?part=${part}&maxResults=${maxResults}&type=${type}&key=${API_KEY}`;

/**
 * Search according to https://developers.google.com/youtube/v3/docs/search/list?hl=es-419
 *
 * Results according to https://developers.google.com/youtube/v3/docs/search?hl=es-419#resource
 *
 */

const useFetchVideos = () => {
  const { strSearch } = useContext(VideosContext);
  const urlSearch = `${url}&q=${strSearch}`;

  // save a response if any
  const [response, setResponse] = useState(null);
  // setting an error
  const [error, setError] = useState(null);
  const [options] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(urlSearch, options);
        const json = await res.json();
        setResponse(json);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [urlSearch, options]);
  return { response, error };
};

const useFetchRelatedVideos = (videoId) => {
  const urlRelated = `${url}&relatedToVideoId=${videoId}`;
  const options = {};

  // save a response if any
  const [response, setResponse] = useState(null);
  // setting an error
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(urlRelated, options);
        const json = await res.json();
        setResponse(json);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);
  return { response, error };
};

export { useFetchVideos, useFetchRelatedVideos };
