import React from 'react';
import { Link } from 'react-router-dom'
import {
    HOME_PAGE,
    FOOD_PAGE,
    CART_PAGE
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
import Badge from '@material-ui/core/Badge';

function Header() {

    const classes = useStyles();

    const [value, setValue] = React.useState({HOME_PAGE});

    return (
        <div>
            <CssBaseline />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
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
                                <Badge color="secondary" badgeContent={4} >
                                    <ShoppingCartIcon />
                                </Badge>
                            }
                        />
                    </BottomNavigation>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
