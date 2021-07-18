import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParams=>(
    createSelector(
        [selectShopItems],
        collections => collections.find(collection=> {
        
           return collection[collectionUrlParams]
        })
    )
)
