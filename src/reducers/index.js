import { combineReducers } from 'redux';
import ProductsReducer from './ProductsReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
   loading: loadingReducer,
   products: ProductsReducer
});

export default rootReducer;