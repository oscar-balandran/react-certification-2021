import React from 'react';
import HeaderBar from '../../components/HeaderBar/HeaderBar.component';
import VideosList from '../../components/VideosList/VideosList.component';
// import VideosContext from '../../state/VideosContext';

const Favorites = () => {
  // const { favoritesList, setFavoritesList, videoList, setVideoList } = useContext(VideosContext);

  return (
    <>
      <div>
        <HeaderBar />
        <VideosList />
      </div>
    </>
  );
};

export default Favorites;
