import React, { useContext } from 'react';
import { MyContext } from './UseContextTest';

export default function UseContextHeader () {
    const {state} = useContext(MyContext);
    return <h1>{state.name}</h1>
}