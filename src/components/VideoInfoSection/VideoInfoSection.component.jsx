import React, { useContext, useState } from 'react';
import { Grid, Typography, Paper, Button } from '@material-ui/core/';
import AddIcon from '@material-ui/icons/Add';
import VideosContext from '../../state/VideosContext';
import useStyles from './VideoInfoSection.styles';
import { useAuth } from '../../providers/Auth';
import MessageDialog from '../MessageDialog';

const VideoInfoSection = (props) => {
  const classes = useStyles();
  const { authenticated } = useAuth();
  const [dialogOpen, setDialogOpen] = useState(false);
  const { dispatch } = useContext(VideosContext);

  const handleAddFavourites = (video) => {
    dispatch({
      type: 'ADD_FAVOURITE_VIDEO',
      payload: { video },
    });

    setDialogOpen(true);
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
                {authenticated ? (
                  <Button
                    className={classes.addButton}
                    onClick={() => handleAddFavourites(props.video)}
                    startIcon={<AddIcon />}
                  >
                    Favourites
                  </Button>
                ) : (
                  <></>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body1">{props.video.snippet.description}</Typography>
          </Grid>
        </Paper>
      </Grid>
      <MessageDialog
        title="Message"
        message="Video added to favourites!!"
        open={dialogOpen}
        setDialogOpen={setDialogOpen}
      />
    </div>
  );
};

export default VideoInfoSection;
