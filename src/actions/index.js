import axios from 'axios';
const API_KEY = '8150f6fe7a37ebd749de66ec803d8b56';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const DELET_LOCATION = 'DELET_LOCATION';

export const fetchWeather = city => {
  const url = `${ROOT_URL}&q=${city}&units=metric`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export const deletLocation = id => ({
    type: DELET_LOCATION,
    id
});
