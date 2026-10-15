import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import restaurantReducer from "./Restaurant/RestaurantReducer";
import menuItemReducer from "./Menu/MenuReducer";
import cartReducer from "./Cart/CartReducer";

const rooteReducer = combineReducers({
  auth: authReducer,
  restaurant: restaurantReducer,
  menu: menuItemReducer,
  cart: cartReducer,
});

export const store = legacy_createStore(rooteReducer, applyMiddleware(thunk));
