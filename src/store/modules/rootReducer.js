import { combineReducers } from 'redux';

import cart from './cart/reducer';
import product from './product/reducer';


//meus states de redux
export default combineReducers({
  cart,
  product
});