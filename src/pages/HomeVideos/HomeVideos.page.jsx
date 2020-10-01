import React, { useContext, useEffect } from 'react';
import HeaderBar from '../../components/HeaderBar';
import VideosList from '../../components/VideosList';
import VideosContext from '../../state/VideosContext';
import { useFetchVideos } from '../../utils/hooks/useFetchVideos';

const VideosContent = () => {
  const { state, dispatch } = useContext(VideosContext);

  const result = useFetchVideos();

  let fetchedVideos = null;
  if (!result.response) {
    fetchedVideos = [];
  } else {
    fetchedVideos = result.response.items;
  }

  useEffect(() => {
    dispatch({
      type: 'SET_VIDEOLIST',
      payload: fetchedVideos,
    });
  }, [fetchedVideos]);

  return <VideosList title="Welcome to React Challenge!!!" list={state.videoList} />;
};

const HomeVideos = () => {
  return (
    <>
      <HeaderBar>
        <VideosContent />
      </HeaderBar>
    </>
  );
};

export default HomeVideos;
