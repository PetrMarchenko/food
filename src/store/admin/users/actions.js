export const FETCH_USER_ADMIN_ACTION = 'FETCH_USER_ADMIN_ACTION';
export const LOAD_USER_ADMIN_STORE = 'LOAD_USER_ADMIN_STORE';

export const ADD_USER_ADMIN_ACTION = 'ADD_USER_ADMIN_ACTION';
export const ADD_USER_ADMIN_STORE = 'ADD_USER_ADMIN_STORE';

export const DELETE_USER_ADMIN_ACTION = 'DELETE_USER_ADMIN_ACTION';
export const DELETE_USER_ADMIN_STORE = 'DELETE_USER_ADMIN_STORE';

export const EDIT_USER_ADMIN_ACTION = 'EDIT_USER_ADMIN_ACTION';
export const EDIT_USER_ADMIN_STORE = 'EDIT_USER_ADMIN_STORE';


export const editUserAdminAction = payload => ({
  type: EDIT_USER_ADMIN_ACTION,
  payload
});
export const editUserAdminStore = payload => ({
  type: EDIT_USER_ADMIN_STORE,
  payload
});

export const deleteUserAdminAction = payload => ({
  type: DELETE_USER_ADMIN_ACTION,
  payload
});
export const deleteUserAdminStore = payload => ({
  type: DELETE_USER_ADMIN_STORE,
  payload
});

export const addUserAdminAction = payload => ({
  type: ADD_USER_ADMIN_ACTION,
  payload
});
export const addUserAdminStore = payload => ({
  type: ADD_USER_ADMIN_STORE,
  payload
});

export const fetchUserAdminAction = payload => ({
  type: FETCH_USER_ADMIN_ACTION,
  payload
});
export const loadUserAdminStore = payload => ({
  type: LOAD_USER_ADMIN_STORE,
  payload
});
