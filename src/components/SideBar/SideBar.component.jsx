import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import useStyles from './SideBar.styles';
import { useAuth } from '../../providers/Auth';

const SideBar = (props) => {
  const anchor = 'left';

  const classes = useStyles();
  const { authenticated } = useAuth();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    props.handleClose(open);
  };

  const MenuList = (anchorToDrawIn) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchorToDrawIn === 'top' || anchorToDrawIn === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key="Home" component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>

        {
          (authenticated)?(
            <ListItem button key="Favourites" component={Link} to="/favourites">
              <ListItemText primary="Favorites" />
            </ListItem>
          ):(
            <></>
          )
        }
      </List>
    </div>
  );

  toggleDrawer(props.open);
  return (
    <div>
      <React.Fragment key={anchor}>
        <Drawer anchor={anchor} open={props.open} onClose={toggleDrawer(anchor, false)}>
          {MenuList(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default SideBar;
