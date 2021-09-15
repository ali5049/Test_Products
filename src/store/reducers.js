import {combineReducers} from 'redux';
import {Reducer as productReducer} from '../Redux/ProductRedux';
// import reducers from modules and combine here
export default combineReducers({
  products: productReducer,
});
