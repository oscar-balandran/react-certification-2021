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
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const VideoCard = (props) => {
  const classes = useStyles();

  const { selectedVideo, setSelectedVideo } = useContext(VideosContext);

  console.log('VideoCard', selectedVideo);

  return (
    <div key={props.key}>
      <Card>
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
          <CardContent>
            <Typography theme={classes} variant="h5">
              {props.video.snippet.title}
            </Typography>
            <hr />
            <Typography theme={classes} paragraph>
              {props.video.snippet.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default VideoCard;
