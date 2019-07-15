// import axios from 'axios';
import { call } from 'redux-saga/effects';
import React from 'react';

// export default function* request(requestOptions = {}) {
//     requestOptions.headers = {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         ...requestOptions.headers
//     };
//
//     try {
//         return yield call(axios, requestOptions);
//     } catch (error) {
//         throw error;
//     }
// }

export const saveState = state => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    } catch (error) {
        console.error('Can\'t save state to localStorage!');
    }
};

// Selector of reducers, which we want to store in LocalStorage
export const stateToStorageSelector = state => ({
    userInfo: state.userInfo
});

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');

        if (serializedState === null) {
            return {};
        }

        const state = JSON.parse(serializedState);

        saveState(state);

        return state;
    } catch (error) {
        return {};
    }
};
