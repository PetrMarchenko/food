import React from 'react';
import { CART_PAGE, FOOD_PAGE, HOME_PAGE, LOGIN_PAGE, PROFILE_PAGE } from 'constants/routes';
import LoginPage from 'components/screan/LoginPage';
import * as PropTypes from 'prop-types';

const Auth = props => {
  const {
    userRole,
    url,
    children,
  } = props;

  const GUEST_ROLE = 'guest';
  const USER_ROLE = 'user';

  const guest = [
    HOME_PAGE,
    LOGIN_PAGE
  ];
  const user = [
    ...guest,
    CART_PAGE,
    FOOD_PAGE,
    PROFILE_PAGE
  ];
  const permissions = [
    {
      'role': GUEST_ROLE,
      'page': guest
    },
    {
      'role': USER_ROLE,
      'page': user
    }
  ];


  const check = (url) => {

    const role = userRole;

    const index = permissions.findIndex(element => element.role === role);
    if (index < 0) {
      return <LoginPage/>;
    }

    const permission = permissions[index];
    const can = permission.page.findIndex(element => element === url);

    if (can >= 0) {
      return children;
    }

    return <LoginPage/>;
  };

  return check(url);
};

Auth.propTypes = {
  role: PropTypes.string
};


export default Auth;
