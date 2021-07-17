import {createSelector} from 'reselect';

const selectCart = state => state.card;

export const selectCartItems = createSelector(
    [selectCart],
    (card)=> card.cardItems
)

export const selectCountItems = createSelector(
    [selectCartItems],
    cardItems =>  cardItems.reduce((acc, cardItems)=>
    acc + cardItems.quantity, 0
    )
)

export const selectCartHidden = createSelector(
    [selectCart],
    (card)=> card.hidden
)
