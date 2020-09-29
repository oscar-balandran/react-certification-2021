import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';
import { useAuth } from '../../providers/Auth';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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

const LoginModal = (props) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [message, setMessage] = React.useState({ color: null, msg: null });

  const { login } = useAuth();

  const showError = (msg) => {
    setMessage({ color: 'error', msg });
  };

  const showOk = (msg) => {
    setMessage({ color: 'primary', msg });
  };

  const cleanMsg = () => {
    if (message) {
      setMessage({ color: null, msg: null });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    cleanMsg();

    const { usrInput, pwdInput } = event.target.elements;
    const usr = usrInput.value;
    const pwd = pwdInput.value;

    const res = login(usr, pwd);

    if (res) {
      props.handleOk();
      showOk('Login succesful!!');
      setTimeout(props.handleClose, 3000);
    } else {
      showError('Review your credentials!!!');
    }
  };

  const cancel = (event) => {
    event.preventDefault();
    cleanMsg();
    console.log('Modal.OnClose');
    props.handleClose();
  };

  const body = (
    <div style={modalStyle} className={classes.intoModalRoot}>
      <form onSubmit={handleSubmit}>
        <Grid container className={classes.content}>
          <Grid item xs={3} sm={3} className={classes.item}>
            <TextField
              name="usrInput"
              id="usr-input"
              label="Username"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3} sm={3} className={classes.item}>
            <TextField
              name="pwdInput"
              id="pwd-input"
              label="Password"
              variant="outlined"
              type="password"
            />
          </Grid>
          <Grid item xs={3} sm={3} className={classes.item}>
            <Typography
              color={message?.color || 'inherit'}
              variant="caption"
              display="block"
              gutterBottom
            >
              {message?.msg || ''}
            </Typography>
          </Grid>
          <Grid item xs={3} sm={3} className={classes.item}>
            <Grid container className={classes.contentButtons}>
              <Grid item xs={6}>
                <Button color="secondary" onClick={cancel}>
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button type="submit" variant="text" color="primary">
                  Login
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default LoginModal;
