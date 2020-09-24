import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useFetchRelatedVideos } from '../../utils/hooks/useFetchVideos';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 300,
    alignContent: 'right',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const RelatedVideosPanel = (props) => {
  const classes = useStyles();

  const res = useFetchRelatedVideos(props.video.id.videoId);

  if (!res.response) {
    return <div>Loading...</div>;
  }

  const relatedVideoList = res.response.items;

  console.log('RelatedVideosPanel.relatedVideos', relatedVideoList);

  // video.id.videoId
  // video.snippet.title
  // video.snippet.description

  return (
    <>
      <div className={classes.root}>
        <List>
          {relatedVideoList.map((video) => (
            <ListItem key={video.id.videoId}>
              <Card className={classes.root}>
                <div className={classes.details}>
                  <CardMedia
                    className={classes.cover}
                    image={video.snippet.thumbnails.default.url}
                    title={video.snippet.title}
                  />
                  <CardContent className={classes.content}>
                    <Typography component="h3" variant="h5">
                      {video.snippet.title}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};

export default RelatedVideosPanel;
