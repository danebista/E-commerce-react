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