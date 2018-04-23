import * as _ from 'lodash';
import { combineReducers } from 'redux';
import { createReducer } from '../utils/reducers.js';
import { actions } from '../constants/actions';

const {
    REMOVE_CITY,
    RECIEVE_CITY
} = actions;

const initialState = {
    cities: { }
};

const cityInitialState = {
    title: '',
    temp: 0,
    iconId: '01d',
    receivedAt: 0
};

const cities = createReducer(initialState, {
    [REMOVE_CITY]: (state, action) => {
        let cities = state.cities;
        delete cities[action.cityId];
        cities = _.cloneDeep(cities);
        return Object.assign({}, state, { cities });
    },
    [RECIEVE_CITY]: (state, action) => {
        const newCity = {
            [action.cityId]: { 
                ...cityInitialState, 
                title: action.name, 
                temp: action.temp,
                iconId: action.iconId,
                receivedAt: action.receivedAt 
            }
        };

        return { 
            ...state, 
            cities: { ...state.cities, ...newCity }
        };
    }
});

export default combineReducers({ cities });