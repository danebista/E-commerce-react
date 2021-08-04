import {CardActionTypes} from './card-types';

export const toggleCardHidden = () =>  (
    {
        type: CardActionTypes.CARD_USER_HIDDEN
    }
)

export const addItem = item =>(
    {
        type: CardActionTypes.CARD_USER_ADD,
        payload: item
    }
)

export const removeItem = item =>(
    {
        type: CardActionTypes.CARD_REMOVE,
        payload: item
    }
)

export const removeEachItem = item =>(
    {
        type: CardActionTypes.REMOVE_ITEM,
        payload: item
    }
)

export const clearCart = ()=>({
    type: CardActionTypes.CLEAR_CART
})