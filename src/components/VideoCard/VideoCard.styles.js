import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  card: {
    height: 450,
    margin: '30px auto 50px',
    maxWidth: 345,
    overflow: 'hidden',
    padding: '0px',
  },
  cardContent: {
    paddingBottom: '50px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default useStyles;
