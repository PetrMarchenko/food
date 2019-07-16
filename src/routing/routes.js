import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'components/screan/Home/component';
import FoodPage from 'components/screan/Food';
import Header from 'components/layout/Header/component';
import Footer from 'components/layout/Footer/component';
import {
    HOME_PAGE,
    FOOD_PAGE,
} from 'constants/routes';

export default () => (
    <container>
        <Header/>
        <Switch>
            <Route exact path={ HOME_PAGE } component={ HomePage }/>
            <Route exact path={ FOOD_PAGE } component={ FoodPage }/>
        </Switch>
        <Footer/>
    </container>
);