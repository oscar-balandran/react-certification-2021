import React from 'react';

const VideosContext = React.createContext({
  selectedVideo: null,
  videoList: [],
  strSearch: '',
  favoritesList: [],
  setSelectedVideo: () => {},
  setVideoList: () => {},
  setStrSearch: () => {},
  setFavouritesList: () => {},
});

export default VideosContext;
