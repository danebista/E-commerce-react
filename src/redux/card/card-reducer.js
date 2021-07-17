 import {CardActionTypes} from './card-types';
 import {addItemToCart, removeItemToCart} from './card-util';

const INITIAL_STATE = {
    hidden : true,
    cardItems: []
}


 const cardReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case CardActionTypes.CARD_USER_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        
        case CardActionTypes.CARD_USER_ADD:
            return {
                ...state,
                cardItems: addItemToCart(state.cardItems, action.payload)
            }
        
        case CardActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cardItems: removeItemToCart(state.cardItems, action.payload)
            }

        case CardActionTypes.CARD_REMOVE:
            return {
                ...state,
                cardItems:  state.cardItems.filter(cardItem => cardItem.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default cardReducer;
