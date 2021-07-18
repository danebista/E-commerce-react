import {createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
    hats: 1, 
    sneakers: 2,
    jackets: 3,
    womens: 4, 
    mens: 5
}

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParams=>(
    createSelector(
        [selectShopItems],
        collections => collections.find(collection=> {
            console.log(collection.id)
            console.log(collectionUrlParams)
            console.log(COLLECTION_ID_MAP[collectionUrlParams])
           return collection.id === COLLECTION_ID_MAP[collectionUrlParams]
        })
    )
)
