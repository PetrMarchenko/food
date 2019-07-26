import request from 'helpers/request';
import { API_URL } from 'constants/apiconfig';

const foodsFeatureList = `${ API_URL }foods`;


export const fetchAll = payload => request({
    method: 'get',
    url: foodsFeatureList,
    // data  : JSON.stringify(payload.data),
    // headers: {
    //     'Authorization': `Bearer ${ payload.token }`,
    // }
});


