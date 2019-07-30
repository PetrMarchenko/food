import request from 'helpers/request';
import { API_URL } from 'constants/apiconfig';

const fetchURL = `${API_URL}users`;

export const fetchUserRequest = payload => request({
  method: 'get',
  url   : fetchURL,
});

// data  : JSON.stringify(payload.data),
// headers: {
//     'Authorization': `Bearer ${ payload.token }`,
// }


