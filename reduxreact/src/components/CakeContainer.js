import React from 'react';
import {connect} from 'react-redux';
import { buycake } from '../redux';


function CakeContainer(props) {
    return (
        <div>
        <h1>no of cakes-{props.numOfCakes}</h1>
        <button onClick={props.buyCake}>buy cake</button>
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
        buyCake:()=>dispatch(buycake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)( CakeContainer)
