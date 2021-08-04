import {createSelector} from 'reselect';

const selectCart = state => state.card;

export const selectCartItems = createSelector(
    [selectCart],
    (card)=> card.cardItems
)

export const selectCountItems = createSelector(
    [selectCartItems],
    cardItems =>  cardItems.reduce((acc, cardItem)=>
    acc + cardItem.quantity, 0
    )
)

export const selectCountItemsTotal = createSelector(
    [selectCartItems],
    cardItems =>  cardItems.reduce((acc, cardItem)=>
    acc + cardItem.quantity * cardItem.price , 0
    )
)

export const selectCartHidden = createSelector(
    [selectCart],
    (card)=> card.hidden
)
