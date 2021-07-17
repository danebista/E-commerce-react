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