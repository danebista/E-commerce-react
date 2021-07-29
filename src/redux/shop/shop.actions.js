import ShopTypes from './shop.types';

export const updateCollections = (collectionMap) => ({
    type: ShopTypes.UPDATE_COLLECTION,
    payload: collectionMap
})