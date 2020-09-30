import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    width: '90%',
    alignContent: 'right',
    paddingTop: '5px',
  },
  gridContainer: {
    display: 'flex',
    flexGrow: 0,
    flexDirection: 'column',
    minHeight: 0,
  },
  withScroll: {
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
  },
  noScroll: {
    flexGrow: 0,
    height: 100,
    maxWidth: '95%',
    overflow: 'hidden',
    paddingTop: '5px',
  },
}));

export default useStyles;
