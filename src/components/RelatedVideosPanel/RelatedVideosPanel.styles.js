import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    width: '90%',
    alignContent: 'right',
    paddingTop: '5px',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(0),
    flexGrow: 1,
    maxHeight: '100%',
    minHeight: '100%',
    maxWidth: '100%',
    flexBasis: '100%',
    overflowY: 'auto',
  },
  card: {
    height: 100,
    margin: '30px auto 50px',
    maxWidth: 400,
    overflow: 'visible',
    padding: '0px',
  },
  cardContent: {
    paddingBottom: '5px',
  },
  cardMedia: {
    margin: '-70px auto 0',
    width: '80%',
    height: 100,
    borderRadius: '4px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    position: 'relative',
    zIndex: 1,
  },
}));

export default useStyles;
