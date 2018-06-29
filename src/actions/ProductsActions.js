import { database, storage } from '../fire'

export const GET_PRODUCTS = 'get_products';
export const PRODUCTS_STATUS = 'products_status';

export function getProducts(e) {
    console.log('itmade it');
    return dispatch => {
        dispatch({
            type: PRODUCTS_STATUS,
            payload: true
        });
        database.ref(e).on('value', db => {
            console.log(db.val());
            dispatch({
                type: GET_PRODUCTS,
                payload: db.val()
            });
            dispatch({
                type: PRODUCTS_STATUS,
                payload: false
            })
        })
    }


}