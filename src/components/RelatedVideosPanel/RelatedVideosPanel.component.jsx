import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useFetchRelatedVideos } from '../../utils/hooks/useFetchVideos';
import useStyles from './RelatedVideosPanel.styles';

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
