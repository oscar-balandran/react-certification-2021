import React, { useContext } from 'react';
import HeaderBar from '../../components/HeaderBar';
import VideosList from '../../components/VideosList';
import VideosContext from '../../state/VideosContext';
import { useFetchVideos } from '../../utils/hooks/useFetchVideos';

const HomeVideos = () => {
  const { videoList, strSearch, setVideoList } = useContext(VideosContext);

  const res = useFetchVideos(strSearch);

  let tmpVideos = null;
  if (!res.response) {
    tmpVideos = null;
  } else {
    tmpVideos = res.response.items;
  }

  setVideoList(tmpVideos);

  return (
    <>
      <HeaderBar />
      <VideosList title="Welcome to React Challenge!!!" list={videoList} />
    </>
  );
};

export default HomeVideos;
