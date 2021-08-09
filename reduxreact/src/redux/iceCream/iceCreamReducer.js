import {BUY_ICECREAM} from './iceCreamTypes';


const intialState={
    noOfIceCreams:20
}

const reducer=(state=intialState,action)=>{
    switch(action.type){
      case BUY_ICECREAM:
          return{
              ...state,
             noOfIceCreams:state.noOfIceCreams-1
          }
          default :return state;
    }
}
export default reducer;