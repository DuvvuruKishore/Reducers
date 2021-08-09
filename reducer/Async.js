const redux=require('redux');
const createStore=redux.createStore;
const applyMiddleWare=redux.applyMiddleware;
const thunkMiddleware=require('redux-thunk').default;
const axios=require('axios');

const intialState={
    loading:true,
    users:[],
    error:''

}

const FETCH_USER_REQUEST='FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS='FETCH_USER_SUCCESS';
const FETCH_USER_ERROR='FETCH_USER_ERROR';

function fetchUserRequest(){
    return{
        type:FETCH_USER_REQUEST
    }
}

function fetchUserSuccess(users){
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}
function fetchUserError(error){
    return{
        type:FETCH_USER_ERROR,
        payload:error
    }
}

const reducer=(state=intialState,action)=>{
   switch(action.type){
     case FETCH_USER_REQUEST:
         return{
             ...state,
             loading:true
         }
         case FETCH_USER_SUCCESS:
         return{
             loading:false,
             users:action.payload,
             error:''
         }
         case FETCH_USER_ERROR:
         return{
             loading:false,
             users:[],
             error:action.payload
         }

   }
}

const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users').
        then(response=>{
          const users=response.data.map(user=>user.id)
           dispatch(fetchUserSuccess(users));
        }).catch(error=>{
          dispatch(fetchUserError(error.message));
        })
    }
}

const store=createStore(reducer,applyMiddleWare(thunkMiddleware));
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchUsers());
