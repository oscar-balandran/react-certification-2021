import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core/';
import VideosContext from '../../state/VideosContext';

const useStyles = makeStyles(() => ({
  card: {
    height: 450,
    margin: '30px auto 50px',
    maxWidth: 345,
    overflow: 'hidden',
    padding: '0px',
  },
  cardContent: {
    paddingBottom: '50px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const VideoCard = (props) => {
  const classes = useStyles();

  const { setSelectedVideo } = useContext(VideosContext);

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea
          component={Link}
          to="/video"
          onClick={() => setSelectedVideo(props.video)}
        >
          <CardMedia
            className={classes.media}
            image={props.video.snippet.thumbnails.medium.url}
            onClick={() => setSelectedVideo(props.video)}
          />
          <CardContent className={classes.cardContent}>
            <Typography color="textPrimary" variant="h5">
              {props.video.snippet.title}
            </Typography>
            <hr />
            <Typography paragraph variant="body2">
              {props.video.snippet.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default VideoCard;
