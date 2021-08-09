import React from 'react';
import {connect} from 'react-redux';
import { buyIceCream } from '../redux';


function IceCreamContainer(props) {
    return (
        <div>
        <h1>no of cakes-{props.noOfIceCreams}</h1>
        <button onClick={props.buyIceCream}>buy cake</button>
        </div>
    )
}

const mapStateToProps=state=>{
return {
    noOfIceCreams:state.iceCream.noOfIceCreams
    
}
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)
