import React from 'react';
import { Switch } from 'react-router-dom';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer/component';
import HomePage from 'components/screan/HomePage/component';
import FoodPage from 'components/screan/FoodPage';
import CartPage from 'components/screan/CartPage';
import LoginPage from 'components/screan/LoginPage';
import ProfilePage from 'components/screan/ProfilePage/component';
import AdminUsersPage from 'components/screan/Admin/UsersPage';
import { ADMIN_USERS_PAGE, CART_PAGE, FOOD_PAGE, HOME_PAGE, LOGIN_PAGE, PROFILE_PAGE } from 'constants/routes';
import RoutAuth from 'components/commons/RouteAuth';

export default () => (
  <div>
    <Header/>
    <Switch>
      <RoutAuth
        exact
        path={HOME_PAGE}
        component={HomePage}
      />
      <RoutAuth
        exact
        path={FOOD_PAGE}
        component={FoodPage}
      />
      <RoutAuth
        exact
        path={CART_PAGE}
        component={CartPage}
      />
      <RoutAuth
        exact
        path={LOGIN_PAGE}
        component={LoginPage}
        redirect={HomePage}
      />
      <RoutAuth
        exact
        path={PROFILE_PAGE}
        component={ProfilePage}
      />
      <RoutAuth
        exact
        path={ADMIN_USERS_PAGE}
        component={AdminUsersPage}
      />
    </Switch>
    <Footer/>
  </div>
);