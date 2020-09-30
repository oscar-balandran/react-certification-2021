import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideosContext from '../../state/VideosContext';
import SideBar from '../SideBar/SideBar.component';
import { useAuth } from '../../providers/Auth';
import LoginModal from '../LoginModal/LoginModal.component';
import useStyles from './HeaderBar.styles';

const HeaderBar = (props) => {
  const classes = useStyles();

  const { strSearch, setStrSearch } = useContext(VideosContext);
  const { authenticated } = useAuth();

  const [sideBarOpen, setSideBarOpen] = React.useState(false);
  const [loginModalOpen, setLoginModalOpen] = React.useState(false);

  let avatarProps = { img: '', altImg: '' };

  const isSideBarOpen = Boolean(sideBarOpen);
  const isLoginModalOpen = Boolean(loginModalOpen);

  const setAvatarLoggedIn = () => {
    avatarProps = { img: 'wize_icon.jpg', altImg: 'Wizeline account!!' };
  };
  const setAvatarLoggedOut = () => {
    avatarProps = { img: 'anom_icon.png', altImg: 'Anonymous account' };
  };

  if (authenticated) {
    setAvatarLoggedIn();
  } else {
    setAvatarLoggedOut();
  }

  const handleSideBarButton = (open) => {
    setSideBarOpen(open);
  };

  const showLogin = () => {
    console.log('Authenticated?:', authenticated);

    if (!authenticated) {
      setLoginModalOpen(true);
    }
  };
  const hideLogin = () => {
    setLoginModalOpen(false);
  };
  const handleAccount = () => {
    setAvatarLoggedIn();
  };

  const handleSearchKeyPress = (event) => {
    if (event.key === 'Enter') {
      const str = event.target.value;
      console.log(`Looking for: ${str}`);
      setStrSearch(str);
    }
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleSideBarButton(true)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={strSearch || 'Search…'}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onKeyPress={handleSearchKeyPress}
            >
              {strSearch}
            </InputBase>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="User Login"
              aria-haspopup="true"
              color="inherit"
              onClick={showLogin}
            >
              {/* <img src={accountImg} alt={altImg} /> */}
              <Avatar alt={avatarProps.altImg} src={avatarProps.img} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <SideBar open={isSideBarOpen} handleClose={setSideBarOpen} />
      <LoginModal
        open={isLoginModalOpen}
        handleClose={hideLogin}
        handleOk={handleAccount}
      />
      {props.children}
    </div>
  );
};

export default HeaderBar;
