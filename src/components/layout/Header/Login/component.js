import React from 'react';
import {
    HOME_PAGE,
    PROFILE_PAGE,
    LOGIN_PAGE,
    ADMIN_USERS_PAGE
} from 'constants/routes'

import history from 'src/history';
import * as PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Login = props => {

    const {
        logOut,
        token,
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
        handleClose(event)
    }

    if (token.length > 0 ) {
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
                <MenuItem value = { PROFILE_PAGE } onClick={handleClose}>Profile</MenuItem>
                if (userRole == 'admin') {<MenuItem value = { ADMIN_USERS_PAGE } onClick={handleClose}>Users</MenuItem>}
                <MenuItem value = { HOME_PAGE } onClick={onClickLogOut}>Logout</MenuItem>
            </Menu>
        </div>)
    }

    return <div><Button onClick={()=>{history.push(LOGIN_PAGE)}} color="inherit">Login</Button></div>
};

Login.propTypes = {
    logOut: PropTypes.func,
    token: PropTypes.string
};

export default Login;
