// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import {cityReducer} from './reducers/cityReducer.js';

const store = configureStore({
    reducer: {
        cities: cityReducer,
    },
});

export default store;
