 import {combineReducers} from 'redux';
 
 import userReducer from './user/user-reducer';
 import cardReducer from './card/card-reducer';
 import directoryReducer from './directory/directory-reducer';



 export default  combineReducers({
     user: userReducer,
     card: cardReducer,
     directory: directoryReducer
 });
    