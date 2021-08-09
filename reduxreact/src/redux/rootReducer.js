import {combineReducers} from 'redux';
import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import userReducer from './user/UserReducers';


const rootreducer=combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer,
    user:userReducer
})
export default rootreducer;