import React from 'react';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    paddingTop: '56.25%',
    height: '60vh',
  },
  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));

const VideoPlayer = (props) => {
  const classes = useStyles();

  const { videoId } = props.video.id;

  return (
    <div className={classes.root}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoId}`}
        width="100%"
        height="100%"
        className={classes.reactPlayer}
      />
    </div>
  );
};

export default VideoPlayer;
