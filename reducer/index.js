const redux=require('redux');
const reduxLogger=require('redux-logger');

const createStore=redux.createStore;
const combineReducers=redux.combineReducers;
const applyMiddleWare=redux.applyMiddleware;
const logger=reduxLogger.createLogger();



//action //action creaters
const BUYCAKE='BUYCAKE';
const ICECREAM='ICECREAM';

function buycake(){
return{
    type:BUYCAKE,
    info:'first reducer action'
}
}
function icecream(){
    return{
        type:ICECREAM,
        info:'first reducer action'
    }
    }
    
//initial state
/*const initialState={
    noOfCakes:10,
    noOfIceCrems:20
}*/
const intialcakes={
    noOfCakes:10
}
const intialIceCreams={
    noOfIceCrems:20
}


//reducer
/*const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUYCAKE:
            return{
                ...state,
                noOfCakes:state.noOfCakes-1
            }
            case ICECREAM:
            return{
                ...state,
                noOfIceCrems:state.noOfIceCrems-1
            }
        
        default :return state;
    }
}*/
const cakes=(state=intialcakes,action)=>{
    switch(action.type){
        case BUYCAKE:
            return{
                ...state,
                noOfCakes:state.noOfCakes-1
            }
           
        default :return state;
    }
}
const icecreams=(state=intialIceCreams,action)=>{
    switch(action.type){
            case ICECREAM:
            return{
                ...state,
                noOfIceCrems:state.noOfIceCrems-1
            }
        
        default :return state;
    }
}

const rootreducer=combineReducers({
    cake:cakes,icecream:icecreams
})


//store
const store=createStore(rootreducer,applyMiddleWare(logger));
console.log("intial state",store.getState());
const unsubscribe=store.subscribe(()=>console.log("update state",store.getState()));
store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(icecream());
store.dispatch(icecream());
unsubscribe();