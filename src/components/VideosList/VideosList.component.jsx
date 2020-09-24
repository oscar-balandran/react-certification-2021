import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

import VideoCard from '../VideoCard';
import VideosContext from '../../state/VideosContext';

import { useFetchVideos } from '../../utils/hooks/useFetchVideos';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const VideosList = () => {
  const classes = useStyles();

  const { videoList, strSearch, setVideoList } = useContext(VideosContext);

  console.log(`VideoList Search: ${strSearch}`);

  const res = useFetchVideos(strSearch);

  if (!res.response) {
    return <div>Loading...</div>;
  }

  setVideoList(res.response.items);

  return (
    <>
      <div className={classes.root}>
        <div>
          <h3 className={classes.h2}>Welcome to React Challenge</h3>
        </div>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {videoList.map((video) => (
            <Grid item xs={12} sm={6} md={3} key={video.id.videoId}>
              <VideoCard video={video} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default VideosList;
