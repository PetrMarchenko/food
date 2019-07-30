import React from 'react';
import { ADMIN_USERS_PAGE, HOME_PAGE, PROFILE_PAGE } from 'constants/routes';

import { ADMIN_ROLE, } from 'constants/auth/role';

import history from 'src/history';
import * as PropTypes from 'prop-types';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const LoginMenu = props => {

  const {
    logOut,
    userRole
  } = props;


  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose(event) {
    setAnchorEl(null);
    const url = event ? event.target.getAttribute('value') : null;
    console.log(url);
    if (url !== null) {
      history.push(url);
    }
  }

  function onClickLogOut(event) {
    logOut();
    handleClose(event);
  }

  let admin = [];
  if (userRole === ADMIN_ROLE) {
    admin.push({
      value  : ADMIN_USERS_PAGE,
      title  : 'Users',
      onClick: handleClose
    });
  }

  let menu = [
    {
      value  : PROFILE_PAGE,
      title  : 'Profile',
      onClick: handleClose
    },
    ...admin,
    {
      value  : HOME_PAGE,
      title  : 'Logout',
      onClick: onClickLogOut
    }
  ];

  return (<div>
    <AccountCircle
      aria-controls="simple-menu"
      aria-haspopup="true"
      onClick={handleClick}
      color="inherit"
    >
    </AccountCircle>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {
        menu.map((value, key) => (
          <MenuItem key={key} value={value.value} onClick={value.onClick}>{value.title}</MenuItem>
        ))
      }
    </Menu>
  </div>);
};

LoginMenu.propTypes = {
  logOut  : PropTypes.func,
  userRole: PropTypes.string
};

export default LoginMenu;
