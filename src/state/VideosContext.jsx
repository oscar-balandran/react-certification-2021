import React from 'react';

const VideosContext = React.createContext({
  videoList: [],
  selectedVideo: null,
  favoritesList: [],
  strSearch: '',
});

export default VideosContext;
