import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import VideoCard from '../VideoCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const VideosList = (props) => {
  const classes = useStyles();

  if (!props.list) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={classes.root}>
        <div>
          <h3 className={classes.h2}>{props.title}</h3>
        </div>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="stretch"
        >
          {props.list.map((video) => (
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
