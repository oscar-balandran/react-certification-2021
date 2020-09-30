import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core/';
import VideosContext from '../../state/VideosContext';
import useStyles from './VideoCard.styles';

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
