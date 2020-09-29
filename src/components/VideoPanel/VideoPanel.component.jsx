import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import VideoPlayer from '../VideoPlayer/VideoPlayer.component';
import VideoInfoOps from '../VideoInfoOps/VideoInfoOps.component';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    width: '90%',
    alignContent: 'right',
    paddingTop: '5px',
  },
  gridContainer: {
    display: 'flex',
    flexGrow: 0,
    flexDirection: 'column',
    minHeight: 0,
  },
  withScroll: {
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
  },
  noScroll: {
    flexGrow: 0,
    height: 100,
    maxWidth: '95%',
    overflow: 'hidden',
    paddingTop: '5px',
  },
}));

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
