import React, {useContext } from 'react';
import { MyContext } from './UseContextTest'

export default function Form () {
    const {state, dispatch} =useContext(MyContext)

    return(
        <input 
            type ="text"
            value = {state.name}
            onChange={e => dispatch({
                type: 'change_name', 
                payload: e.target.value
            })} 
        />
    )
}

// 上記は、useContextでuseReducerのシステムを別コンポーネントにわたしている。
// たしかにこの組み合わせを作れば、小さな処理はhooks内で完結できる