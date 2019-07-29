import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer/component';
import HomePage from 'components/screan/HomePage/component';
import FoodPage from 'components/screan/FoodPage';
import CartPage from 'components/screan/CartPage';
import LoginPage from 'components/screan/LoginPage';
import ProfilePage from 'components/screan/ProfilePage/component';
import AdminUsersPage from 'components/screan/Admin/UsersPage/component';
import {
    HOME_PAGE,
    FOOD_PAGE,
    CART_PAGE,
    LOGIN_PAGE,
    PROFILE_PAGE,
    ADMIN_USERS_PAGE
} from 'constants/routes';

import Auth from 'components/commons/Auth';
import RoutAuth from 'components/commons/RouteAuth';

//
// export const GUEST_ROLE = 'guest';
// export const USER_ROLE = 'user';
//
// const guest = [
//     HOME_PAGE,
//     LOGIN_PAGE
// ];
//
// const user = [
//     ...guest,
//     CART_PAGE,
//     FOOD_PAGE,
//     PROFILE_PAGE
// ];
//
//
// const permissions = [
//     {
//         'role' : GUEST_ROLE,
//         'page' : guest
//     },
//     {
//         'role' : USER_ROLE,
//         'page' : user
//     }
// ];
//
//
// const check = (url, page) => {
//
//     const role = GUEST_ROLE;
//
//     const index = permissions.findIndex(element => element.role === role);
//     if (index < 0) {
//         return LoginPage;
//     }
//
//     const permission = permissions[index];
//     const can = permission.page.findIndex(element => element === url);
//
//     if (can >= 0) {
//         return page;
//     }
//
//     return LoginPage;
// };

export default () => (
    <div>
        <Header/>
        <Switch>
            <RoutAuth
                exact
                path = { HOME_PAGE }
                component={HomePage}
            />
            <RoutAuth
                exact
                path = { FOOD_PAGE }
                component={FoodPage}
            />
            <RoutAuth
                exact
                path = { CART_PAGE }
                component = {CartPage}
            />
            <RoutAuth
                exact
                path = { LOGIN_PAGE }
                component={ LoginPage }
                redirect = { HomePage }
            />
            <RoutAuth
                exact
                path={ PROFILE_PAGE }
                component={ProfilePage}
            />
            <RoutAuth
                exact
                path={ ADMIN_USERS_PAGE }
                component={AdminUsersPage}
            />
        </Switch>


        {/*<Switch>*/}
        {/*    <Route*/}
        {/*        exact*/}
        {/*        path={ HOME_PAGE }*/}
        {/*        // component={ check(HOME_PAGE , HomePage) }*/}
        {/*        component={ () => (<Auth url={HOME_PAGE}>{<HomePage/>}</Auth>) }*/}
        {/*    />*/}
        {/*    <Route*/}
        {/*        exact*/}
        {/*        path={ FOOD_PAGE }*/}
        {/*        // component={ check(FOOD_PAGE , FoodPage) }*/}
        {/*        component={() => (<Auth url={FOOD_PAGE}>{<FoodPage/>}</Auth>)}*/}
        {/*    />*/}
        {/*    <Route*/}
        {/*        exact*/}
        {/*        path={ CART_PAGE }*/}
        {/*        // component={ check(CART_PAGE , CartPage) }*/}
        {/*        component={() => (<Auth url={CART_PAGE}>{<CartPage/>}</Auth>)}*/}
        {/*    />*/}
        {/*    <Route*/}
        {/*        exact*/}
        {/*        path={ LOGIN_PAGE }*/}
        {/*        // component={ check(LOGIN_PAGE , LoginPage) }*/}
        {/*        component={() => (<Auth url={LOGIN_PAGE}>{<LoginPage/>}</Auth>)}*/}
        {/*    />*/}
        {/*    <Route*/}
        {/*        exact*/}
        {/*        path={ PROFILE_PAGE }*/}
        {/*        // component={ check(PROFILE_PAGE , ProfilePage) }*/}
        {/*        component={() => (<Auth url={PROFILE_PAGE}>{<ProfilePage/>}</Auth>)}*/}
        {/*    />*/}
        {/*</Switch>*/}
        <Footer/>
    </div>
);