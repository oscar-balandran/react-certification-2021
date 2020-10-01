import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { Grid, Typography, Paper } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import VideosContext from '../../state/VideosContext';
import useStyles from './VideoInfoSection.styles';
import { useAuth } from '../../providers/Auth';

const VideoInfoSection = (props) => {
  const classes = useStyles();
  const { authenticated } = useAuth();

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
                {
                  (authenticated)?(
                    <Button
                      className={classes.addButton}
                      onClick={() => handleAddFavourites(props.video)}
                      startIcon={<AddIcon />}
                    >
                      Favourites
                    </Button>
                  ):(
                    <></>
                  )
                }
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

export default VideoInfoSection;
