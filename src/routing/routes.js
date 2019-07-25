import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'components/screan/Home/component';
import FoodPage from 'components/screan/Food';
import CartPage from 'components/screan/Cart';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer/component';
import LoginPage from 'components/screan/Login/component';

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