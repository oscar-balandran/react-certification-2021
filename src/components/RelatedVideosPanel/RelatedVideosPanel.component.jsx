import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useFetchRelatedVideos } from '../../utils/hooks/useFetchVideos';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    width: '90%',
    alignContent: 'right',
    paddingTop: '5px',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(0),
    flexGrow: 1,
    maxHeight: '100%',
    minHeight: '100%',
    maxWidth: '100%',
    flexBasis: '100%',
    overflowY: 'auto',
  },
  card: {
    height: 100,
    margin: '30px auto 50px',
    maxWidth: 400,
    overflow: 'visible',
    padding: '0px',
  },
  cardContent: {
    paddingBottom: '5px',
  },
  cardMedia: {
    margin: '-70px auto 0',
    width: '80%',
    height: 100,
    borderRadius: '4px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    position: 'relative',
    zIndex: 1,
  },
}));

const RelatedVideosPanel = (props) => {
  const classes = useStyles();

  const res = useFetchRelatedVideos(props.video.id.videoId);

  if (!res.response) {
    return <div>Loading...</div>;
  }

  const relatedVideoList = res.response.items;

  return (
    <>
      <div className={classes.root}>
        <Grid
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="stretch"
          className={classes.gridContainer}
        >
          {relatedVideoList.map((video) => (
            <Grid item xs zeroMinWidth key={video.id.videoId}>
              <Card className={classes.card}>
                <div className={classes.details}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={video.snippet.thumbnails.default.url}
                    title={video.snippet.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body2">{video.snippet.title}</Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default RelatedVideosPanel;
