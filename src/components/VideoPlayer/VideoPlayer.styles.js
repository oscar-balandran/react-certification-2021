import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    paddingTop: '56.25%',
    height: '60vh',
  },
  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));

export default useStyles;
