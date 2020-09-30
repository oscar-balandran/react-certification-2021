import React, { useContext } from 'react';
import { Grid } from '@material-ui/core/';
import { Redirect } from 'react-router-dom';
import VideoPanel from '../../components/VideoPanel';
import VideosContext from '../../state/VideosContext';
import RelatedVideosPanel from '../../components/RelatedVideosPanel';
import HeaderBar from '../../components/HeaderBar/HeaderBar.component';
import useStyles from './VideoDetail.styles';

const VideoDetail = () => {
  const classes = useStyles();

  const { selectedVideo } = useContext(VideosContext);

  if (!selectedVideo) {
    console.log('No video detected!!!');
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className={classes.root}>
        <HeaderBar />
        <Grid container className={classes.gridContainer}>
          <Grid item xs={8} className={classes.noScroll}>
            <VideoPanel video={selectedVideo} />
          </Grid>
          <Grid item xs={4} className={classes.withScroll}>
            <RelatedVideosPanel video={selectedVideo} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default VideoDetail;
