import { PRODUCTS_STATUS } from '../actions/ProductsActions';

export default function ( state = {}, action) {
    switch (action.type) {
        case PRODUCTS_STATUS:
            return { ...state, user: action.payload };
        default:
            return state;
    }
}