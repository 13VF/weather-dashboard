import { actions } from '../constants/actions';

const {
    REMOVE_CITY,
    RECIEVE_CITY
} = actions;

const apiUrl = 'http://api.openweathermap.org/data/2.5/';
// Ключ станет невалидным через неск. дней, 
// оставлен для удобства демонстрации;
const apiKey = '81c81605847442b625e6ff27a12784ea';

export function removeCity(cityId) {
    return {
        type: REMOVE_CITY,
        cityId
    };
};

export function fetchCity(cityId) {
    return function (dispatch) {
        return fetch(`${apiUrl}weather?APPID=${apiKey}&q=${cityId}`)
        .then(response => response.json())
        .then(json => {
            if(json.cod === '404') {
                alert(json.message);
            } else {
                dispatch(receiveCity(cityId, json))
            }
        })
        .catch(error => {
            console.error(error);
        });
    };  
};

export function receiveCity(cityId, json) {
    return {
        type: RECIEVE_CITY,
        cityId,
        name: json.name,
        temp: json.main.temp,
        iconId: json.weather[0].icon,
        receivedAt: Date.now()
    };
};