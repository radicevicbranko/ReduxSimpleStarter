import { combineReducers } from 'redux';
import ReducerWeather from './reducer_weather';

const rootReducer = combineReducers({
  weatherData: ReducerWeather
});

export default rootReducer;
