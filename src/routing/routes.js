import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer/component';
import HomePage from 'components/screan/HomePage/component';
import FoodPage from 'components/screan/FoodPage';
import CartPage from 'components/screan/CartPage';
import LoginPage from 'components/screan/LoginPage';

import {
    HOME_PAGE,
    FOOD_PAGE,
    CART_PAGE,
    LOGIN_PAGE
} from 'constants/routes';

export default () => (
    <div>
        <Header/>
        <Switch>
            <Route exact path={ HOME_PAGE } component={ HomePage }/>
            <Route exact path={ FOOD_PAGE } component={ FoodPage }/>
            <Route exact path={ CART_PAGE } component={ CartPage }/>
            <Route exact path={ LOGIN_PAGE } component={ LoginPage }/>
        </Switch>
        <Footer/>
    </div>
);