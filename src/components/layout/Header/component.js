import React from 'react';
import { Link } from 'react-router-dom'
import {
    HOME_PAGE,
    FOOD_PAGE,
} from 'constants/routes'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FastFoodIcon from '@material-ui/icons/Fastfood';
import HomeIcon from '@material-ui/icons/Home';
import CssBaseline from "@material-ui/core/CssBaseline";
import { useStyles } from './useStyles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import history from 'src/history';



function Header() {

    const classes = useStyles();

    const [value, setValue] = React.useState({HOME_PAGE});

    return (
        <div>
            <CssBaseline />
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
                    </BottomNavigation>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;
