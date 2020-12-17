import React, { useContext } from 'react';
import { MyContext } from './UseContextTest';

export default function UseContextBody () {
    const {state} = useContext(MyContext);
    return <p>これは「{state.name}」の中身です</p>
}