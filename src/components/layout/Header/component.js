import React, {useEffect} from 'react';
import {
    HOME_PAGE,
    FOOD_PAGE,
    CART_PAGE,
    LOGIN_PAGE
} from 'constants/routes'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FastFoodIcon from '@material-ui/icons/Fastfood';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from './useStyles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import history from 'src/history';
import * as PropTypes from 'prop-types';
import WrapInBadge from 'components/commons/WrapInBadge/component'

import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Header = props => {

    const {
        carts,
        fetchCart,
        token
    } = props;

    useEffect(() => {
        fetchCart();
        console.log('useEffect fetchCart');
    }, [fetchCart]);

    const loginMenu = () =>  {
        if (token.length > 0 ) {
            return <div>
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
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        }

        return <Button onClick={()=>{history.push(LOGIN_PAGE);}} color="inherit">Login</Button>

    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    }
    function handleClose() {
        setAnchorEl(null);
    }


    const classes = useStyles();
    const [value, setValue] = React.useState({HOME_PAGE});

    return (
        <div>
            <CssBaseline />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"/>
            <AppBar position="relative">
                <Toolbar>
                    <BottomNavigation
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            history.push(newValue);
                        }}
                        showLabels
                        className={classes.root}
                    >
                        <BottomNavigationAction className={classes.colorIcon} value={HOME_PAGE} label="Home" icon={<HomeIcon />} />
                        <BottomNavigationAction className={classes.colorIcon} value={FOOD_PAGE} label="Food" icon={<FastFoodIcon />} />
                        <BottomNavigationAction
                            className={classes.colorIcon}
                            value={CART_PAGE}
                            label="Cart"
                            icon={
                                <WrapInBadge
                                    badgeColor="secondary"
                                    badgeContent={carts.length}
                                >
                                    <ShoppingCartIcon />
                                </WrapInBadge>
                            }
                        />

                    </BottomNavigation>

                    {loginMenu()}

                </Toolbar>
            </AppBar>
        </div>
    );
};

Header.propTypes = {
    fetchCart: PropTypes.func,
    deleteWithCart: PropTypes.func,
    carts: PropTypes.array
};

export default Header;
