export const addItemToCart = (cardItems, cardItemsToAdd) =>{
    const existingCartItem = cardItems.find(
        cardItem => cardItem.id === cardItemsToAdd.id
    )

    if (existingCartItem) {
        return cardItems.map(cardItem =>
            cardItem.id === cardItemsToAdd.id
            ? {...cardItem, quantity: cardItem.quantity + 1 }
            : cardItem
        )
    }

    return [...cardItems, {...cardItemsToAdd, quantity: 1}]
};

export const removeItemToCart = (cardItems, cardItemToRemove)=> {
    const existingCartItem = cardItems.find(
        cardItem => cardItem.id === cardItemToRemove.id
    )
    
    if (existingCartItem.quantity ===1){
            return cardItems.filter(cardItem => cardItem.id !== cardItemToRemove.id)
    }

    return  cardItems.map(cardItem=> cardItem.id === cardItemToRemove.id ?
        {...cardItem, quantity: cardItem.quantity -1 }:  cardItem
    )
}