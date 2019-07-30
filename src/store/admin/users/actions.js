export const FETCH_USER_ADMIN_ACTION = 'FETCH_USER_ADMIN_ACTION';
export const LOAD_USER_ADMIN_STORE = 'LOAD_USER_ADMIN_STORE';


export const fetchUserAdminAction = payload => ({
  type: FETCH_USER_ADMIN_ACTION,
  payload
});
export const loadUserAdminStore = payload => ({
  type: LOAD_USER_ADMIN_STORE,
  payload
});
