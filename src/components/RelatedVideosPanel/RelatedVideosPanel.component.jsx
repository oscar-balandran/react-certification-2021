import React, { useContext } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import { useFetchRelatedVideos } from '../../utils/hooks/useFetchVideos';
import useStyles from './RelatedVideosPanel.styles';
import VideosContext from '../../state/VideosContext';

const RelatedVideosPanel = (props) => {
  const classes = useStyles();

  const { setSelectedVideo } = useContext(VideosContext);
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
                <CardActionArea
                  component={Link}
                  to="/video"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className={classes.details}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={video.snippet.thumbnails.default.url}
                      title={video.snippet.title}
                      onClick={() => setSelectedVideo(video)}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="body2">{video.snippet.title}</Typography>
                    </CardContent>
                  </div>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default RelatedVideosPanel;
