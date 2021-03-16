//Головний або корінний редюсер
//Буде об'єднувати всі інші редюсери 


import CounterReducer from "./CounterReducer";
import { combineReducers } from "redux";

export default combineReducers({
  CounterReducer
});