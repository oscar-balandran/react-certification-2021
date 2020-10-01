import React, { useContext } from 'react';
import HeaderBar from '../../components/HeaderBar/HeaderBar.component';
import VideosList from '../../components/VideosList/VideosList.component';
import VideosContext from '../../state/VideosContext';

const Favourites = () => {
  // const { favouritesList } = useContext(VideosContext);
  const { state } = useContext(VideosContext);

  return (
    <>
      <div>
        <HeaderBar>
          <VideosList title="My Favourites!!!" list={state.favouritesList} />
        </HeaderBar>
      </div>
    </>
  );
};

export default Favourites;
