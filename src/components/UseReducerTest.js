import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer (state, action) {
    switch (action.type) {
        case "increment":
            return {count: state.count + 1 };
        case 'decrement':
            return {count: state.count - 1 };
    }
}

// ↑コンポーネントに依存しない外の関数にロジックをかけるのが、useReducerの良いところ

export default function Foo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>s
            count: {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>-</button>
        </>
    );
}