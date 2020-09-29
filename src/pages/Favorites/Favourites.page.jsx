import React, { useContext } from 'react';
import HeaderBar from '../../components/HeaderBar/HeaderBar.component';
import VideosList from '../../components/VideosList/VideosList.component';
import VideosContext from '../../state/VideosContext';

const Favourites = () => {
  const { favouritesList } = useContext(VideosContext);

  console.log('Favourites:', favouritesList);

  return (
    <>
      <div>
        <HeaderBar />
        <VideosList title="My Favourites!!!" list={favouritesList} />
      </div>
    </>
  );
};

export default Favourites;
