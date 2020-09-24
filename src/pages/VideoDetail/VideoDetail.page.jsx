import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import VideoPanel from '../../components/VideoPanel';
import VideosContext from '../../state/VideosContext';
import RelatedVideosPanel from '../../components/RelatedVideosPanel';
import HeaderBar from '../../components/HeaderBar/HeaderBar.component';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const VideoDetail = () => {
  const classes = useStyles();

  const { selectedVideo } = useContext(VideosContext);

  console.log('VideoDetail:', selectedVideo);

  return (
    <>
      <div className={classes.root}>
        <HeaderBar />
        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
          <Grid item xs={6}>
            <VideoPanel video={selectedVideo} />
          </Grid>
          <Grid item xs={6}>
            <RelatedVideosPanel video={selectedVideo} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default VideoDetail;
