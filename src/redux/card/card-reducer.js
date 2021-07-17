 import {CardActionTypes} from './card-types';

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
                cardItems: [...state.cardItems, action.payload]
            }

        default:
            return state;
    }
}

export default cardReducer;
