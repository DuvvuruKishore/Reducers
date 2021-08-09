import {FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from './UserTypes';
import axios from 'axios';

export const fetchUserRequest=()=>{
    return{
         type:FETCH_USER_REQUEST,
        
    }
}

export const fetchUserSuccess=users=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}

export const fetchUserError=error=>{
    return{
     type:FETCH_USER_ERROR,
     payload:error   
    }
}


export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest);
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            const users=response.data;
          dispatch(fetchUserSuccess(users))
        }).catch(error=>{
            const errorMsg=error.message;
            dispatch(fetchUserError(errorMsg));
        })
    }
}