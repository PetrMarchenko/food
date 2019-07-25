import axios from 'axios';
import { API_URL } from 'constants/apiconfig';

const CartsFeatureList = `${ API_URL }carts`;
const CartsFeatureAdd = `${ API_URL }cart`;

export function fetchAll() {
    return axios({
        method: 'get',
        url: CartsFeatureList,
    })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error.response;
        });
}

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

export function add(data) {
    return data
}