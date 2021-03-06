import React, { useState } from 'react';
import {connect} from 'react-redux';
import { buycake } from '../redux';


function NewCakeContainer(props) {
    const [number,setNumber]=useState(1);
    return (
        <div>
        <h1>no of cakes-{props.numOfCakes}</h1>
        <input type="text" value={number} onChange={e=>setNumber(e.target.value)}/>
        <button onClick={()=>props.buyCake(number)}>buy cake</button>
        </div>
    )
}

const mapStateToProps=state=>{
return {
    numOfCakes:state.cake.numOfCakes
    
}
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:(number)=>dispatch(buycake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)
