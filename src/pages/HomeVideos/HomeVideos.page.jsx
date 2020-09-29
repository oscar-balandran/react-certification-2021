import React, { useContext } from 'react';
import HeaderBar from '../../components/HeaderBar';
import VideosList from '../../components/VideosList';
import VideosContext from '../../state/VideosContext';
import { useFetchVideos } from '../../utils/hooks/useFetchVideos';

const VideosContent = () => {
  const { videoList, setVideoList } = useContext(VideosContext);

  const res = useFetchVideos();

  let tmpVideos = null;
  if (!res.response) {
    tmpVideos = null;
  } else {
    tmpVideos = res.response.items;
  }

  setVideoList(tmpVideos);

  return <VideosList title="Welcome to React Challenge!!!" list={videoList} />;
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
