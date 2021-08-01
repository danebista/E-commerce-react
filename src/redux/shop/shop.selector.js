import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
 [selectShopItems],
 collections => collections?Object.keys(collections).map(key=>collections[key]):[]
)

export const selectCollection = collectionUrlParams=>(
    createSelector(
        [selectShopItems],
        collections => {
           
         return collections?collections[collectionUrlParams]: null
        }
            
 ) 
)

export const selectIsCollectionFetching = createSelector(
    [selectShop], shop=> shop.isFetching
)

export const selectIsCollectionLoaded =  createSelector(
    [selectShop], 
    shop=> !! shop.collections
)