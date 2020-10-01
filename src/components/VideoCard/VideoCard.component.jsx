import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import VideosContext from '../../state/VideosContext';
import useStyles from './VideoCard.styles';

const VideoCard = (props) => {
  const classes = useStyles();

  const { dispatch, setSelectedVideo } = useContext(VideosContext);

  const handleDeleteVideo = (event, video) => {
    event.stopPropagation();
    event.preventDefault();

    dispatch({
      type: 'REMOVE_VIDEO',
      payload: { video },
    });
  };

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
            <CardActions>
              <IconButton
                className={classes.deleteButton}
                onClick={(event) => handleDeleteVideo(event, props.video)}
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
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
