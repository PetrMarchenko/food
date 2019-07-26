import request from 'helpers/request';
import { API_URL } from 'constants/apiconfig';

const CartsFeatureList = `${ API_URL }carts`;
const CartsFeatureAdd = `${ API_URL }cart`;
const CartsFeatureDelete = `${ API_URL }carts/`;


export const fetchAll = payload => request({
    method: 'get',
    url: CartsFeatureList,
    // data  : JSON.stringify(payload.data),
    // headers: {
    //     'Authorization': `Bearer ${ payload.token }`,
    // }
});

export const add = payload => request({
    method: 'post',
    url: CartsFeatureList,
    data: payload
    // data  : JSON.stringify(payload.data),
    // headers: {
    //     'Authorization': `Bearer ${ payload.token }`,
    // }
});

export const deleteFoodWithCart = payload => request({
    method: 'delete',
    url: CartsFeatureDelete + payload.id,
    // data: payload
    // data  : JSON.stringify(payload.data),
    // headers: {
    //     'Authorization': `Bearer ${ payload.token }`,
    // }
});



// export function fetchAll() {
//     return axios({
//         method: 'get',
//         url: CartsFeatureList,
//     })
//         .then(function (response) {
//             return response;
//         })
//         .catch(function (error) {
//             return error.response;
//         });
// }

// export function add(data) {
//     return axios({
//         method: 'post',
//         url: CartsFeatureAdd,
//         data: data
//     })
//     .then(function (response) {
//         return response;
//     })
//     .catch(function (error) {
//         return error.response;
//     });
// }

// export function add(data) {
//     return data
// }