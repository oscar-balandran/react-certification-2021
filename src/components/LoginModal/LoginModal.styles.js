import { makeStyles } from '@material-ui/core/styles';

const rand = () => {
  return Math.round(Math.random() * 20) - 10;
};

const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  intoModalRoot: {
    display: 'flex',
    position: 'absolute',
    width: 400,
    height: 350,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2), // 2, 4, 3
  },
  content: {
    flexGrow: 1,
    flexDirection: 'column',
    justify: 'space-between',
    alignItems: 'center',
    width: 350,
    minWidth: '100%',
    maxWidth: '100%',
    height: '90%',
    maxHeight: '90%',
  },
  contentButtons: {
    flexDirection: 'row',
    justify: 'flex-end',
    alignItems: 'center',
    width: '100%',
    minWidth: '100%',
    spacing: theme.spacing(2),
  },
  item: {
    width: '100%',
    minWidth: '100%',
  },
}));

export { getModalStyle, useStyles };
