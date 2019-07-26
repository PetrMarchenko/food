import request from 'helpers/request';
import { API_URL } from 'constants/apiconfig';

const fetchAllURL = `${ API_URL }foods`;

export const fetchFoodRequest= payload => request({
    method: 'get',
    url: fetchAllURL,
});

// data  : JSON.stringify(payload.data),
// headers: {
//     'Authorization': `Bearer ${ payload.token }`,
// }


