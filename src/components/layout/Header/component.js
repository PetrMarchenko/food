import React from 'react';
import { Link } from 'react-router-dom'
import {
    HOME_PAGE,
    FOOD_PAGE,
} from 'constants/routes'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FastFoodIcon from '@material-ui/icons/Fastfood';
import Typography from '@material-ui/core/Typography';
import CssBaseline from "@material-ui/core/CssBaseline";

import { useStyles } from './useStyles';



function Header() {

    const classes = useStyles();

    return (
        <div>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <FastFoodIcon className={classes.icon}/>
                    <Typography variant="h6" color="inherit" noWrap>
                        My food
                    </Typography>
                </Toolbar>
            </AppBar>

            <nav>
                <ul>
                    <li><Link to={HOME_PAGE}>Home</Link></li>
                    <li><Link to={FOOD_PAGE}>Roster</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
