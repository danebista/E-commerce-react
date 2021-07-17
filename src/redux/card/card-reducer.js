 import {CardActionTypes} from './card-types';

const INITIAL_STATE = {
    hidden : true
}


 const cardReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case CardActionTypes.CARD_USER_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }

        default:
            return state;
    }
}

export default cardReducer;
