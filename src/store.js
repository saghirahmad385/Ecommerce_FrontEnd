import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productReducer,
  productDetailsReducer,
} from './reducers/productReducer';
import { userDetails, registerUser } from './reducers/userReducer.js';

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user: userDetails,
  // registerUser: registerUser,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
