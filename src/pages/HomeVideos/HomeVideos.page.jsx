import React, { useContext, useEffect } from 'react';
import HeaderBar from '../../components/HeaderBar';
import VideosList from '../../components/VideosList';
import VideosContext from '../../state/VideosContext';
import { useFetchVideos } from '../../utils/hooks/useFetchVideos';

const VideosContent = () => {
  const { state, dispatch, strSearch } = useContext(VideosContext);

  const result = useFetchVideos();

  console.log('HomeVideos:', strSearch, 'Reducer', state, 'RESULT:', result);

  let fetchedVideos = null;
  if (!result.response) {
    console.log('HomeVideos: NO Response:', result);
    fetchedVideos = [];
  } else {
    console.log('HomeVideos: SI Response:', result);
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
