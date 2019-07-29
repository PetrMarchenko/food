import {ADMIN_USERS_PAGE, CART_PAGE, FOOD_PAGE, HOME_PAGE, LOGIN_PAGE, PROFILE_PAGE} from "constants/routes";
import {GUEST_ROLE, USER_ROLE, ADMIN_ROLE} from "constants/auth/role";

const guestPermissions = [
    HOME_PAGE,
    LOGIN_PAGE
];


const userPermissions = [
    ...guestPermissions,
    CART_PAGE,
    FOOD_PAGE,
    PROFILE_PAGE
].filter((el) => [
    LOGIN_PAGE
].indexOf(el));


const adminPermissions = [
    ...userPermissions,
    ADMIN_USERS_PAGE,
].filter((el) => [
    LOGIN_PAGE
].indexOf(el));




export const rolePermissions = [
    {
        'role' : GUEST_ROLE,
        'page' : guestPermissions
    },
    {
        'role' : USER_ROLE,
        'page' : userPermissions
    },
    {
        'role' : ADMIN_ROLE,
        'page' : adminPermissions
    }
];