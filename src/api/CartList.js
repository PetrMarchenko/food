import axios from 'axios';
import { API_URL } from 'constants/apiconfig';

const CartsFeatureList = `${ API_URL }carts`;

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