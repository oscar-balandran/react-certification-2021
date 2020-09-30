import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    width: '100%',
  },
  gridContainer: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    minHeight: 0,
    minWidth: 0,
  },
  withScroll: {
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
  },
  noScroll: {
    maxWidth: '100%',
    overflow: 'visible',
    padding: '5px',
  },
}));

export default useStyles;
