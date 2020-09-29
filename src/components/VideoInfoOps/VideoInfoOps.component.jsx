import React, { useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core/';

import AddIcon from '@material-ui/icons/Add';
import VideosContext from '../../state/VideosContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'left',
    height: '100%',
    width: '90%',
    paddingTop: '5px',
  },
  containerGral: {
    spacing: 0,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.text.secondary,
    alignContent: 'space-between',
    alignItems: 'center',
  },
  containerTitle: {
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'space-between',
    justify: 'space-between',
  },
  addButton: {
    color: theme.palette.secondary.light,
  },
}));

const VideoInfoOps = (props) => {
  const classes = useStyles();

  const { favouritesList, setFavouritesList } = useContext(VideosContext);

  const handleAddFavourites = (video) => {
    setFavouritesList([...favouritesList].concat(video));
  };

  return (
    <div>
      <Grid container className={classes.containerGral}>
        <Paper className={classes.paper} variant="outlined">
          <Grid item>
            <Grid container className={classes.containerTitle}>
              <Grid item xs={8}>
                <Typography variant="h6">{props.video.snippet.title}</Typography>
              </Grid>
              <Grid item xs={4}>
                <IconButton
                  theme={classes}
                  aria-label="Favourites"
                  size="medium"
                  onClick={() => handleAddFavourites(props.video)}
                >
                  <AddIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body1">{props.video.snippet.description}</Typography>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};

export default VideoInfoOps;
