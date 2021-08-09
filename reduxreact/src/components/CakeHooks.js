import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { buycake } from '../redux';

function CakeHooks() {
    const state = useSelector(state => state.cake.numOfCakes);
    const dispatch=useDispatch();
    return (
        <div>
            <h2>number of cakes-{state}</h2>
            <button onClick={()=>dispatch(buycake())}>buy cakes</button>
        </div>
    )
}

export default CakeHooks
