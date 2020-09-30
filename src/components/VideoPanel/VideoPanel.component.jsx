import React from 'react';
import { Grid } from '@material-ui/core/';
import VideoPlayer from '../VideoPlayer/VideoPlayer.component';
import VideoInfoOps from '../VideoInfoOps/VideoInfoOps.component';
import useStyles from './VideoPanel.styles';

const VideoPanel = (props) => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={8} className={classes.noScroll}>
          <VideoPlayer video={props.video} />
        </Grid>
        <Grid item xs={4} className={classes.noScroll}>
          <VideoInfoOps video={props.video} />
        </Grid>
      </Grid>
    </>
  );
};

export default VideoPanel;
