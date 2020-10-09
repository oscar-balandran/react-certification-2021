import React from 'react';
import ReactPlayer from 'react-player';
import useStyles from './VideoPlayer.styles';

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
        data-testid={`videoplayer-${videoId}`}
      />
    </div>
  );
};

export default VideoPlayer;
