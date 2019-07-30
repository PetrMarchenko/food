import request from 'helpers/request';
import { API_URL } from 'constants/apiconfig';

const fetchCartURL = `${API_URL}carts`;
const addToCartsURL = `${API_URL}carts`;
const editCartsURL = `${API_URL}carts/`;
const deleteWithCartURL = `${API_URL}carts/`;


export const fetchCartRequest = payload => request({
  method: 'get',
  url   : fetchCartURL,
});

export const addToCartRequest = payload => request({
  method: 'post',
  url   : addToCartsURL,
  data  : payload
});

export const editCartRequest = payload => request({
  method: 'put',
  url   : editCartsURL + payload.id,
  data  : payload
});

export const deleteWithCartRequest = payload => request({
  method: 'delete',
  url   : deleteWithCartURL + payload.id,
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