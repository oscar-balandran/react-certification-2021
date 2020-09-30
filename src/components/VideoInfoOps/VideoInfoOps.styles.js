import { makeStyles } from '@material-ui/core/styles';

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
    margin: theme.spacing(1),
  },
}));

export default useStyles;
