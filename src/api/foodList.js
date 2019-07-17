import axios from 'axios';
import { API_URL } from 'constants/apiconfig';

const foodsFeatureList = `${ API_URL }foods`;

export function fetchAll() {
    return axios({
        method: 'get',
        url: foodsFeatureList,
    })
    .then(function (response) {
        return response;
    })
    .catch(function (error) {
        return error.response;
    });
}
