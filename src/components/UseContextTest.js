import React, { useReducer } from 'react';
import UseContextHeader from './UseContextHeader'
import UseContextBody from './UseContextBody'
import UseContextForm from './UseContextForm'


const initialState = {
    name: 'しょきち'
}


const reducer = (state, action) => {
    switch(action.type){
        case 'change_name':
            return {
                ...state,
                name: action.payload
            }
        }
    }
    
export const MyContext = React.createContext();

const SiteProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <MyContext.Provider value={{state, dispatch}}>
            {children}
        </MyContext.Provider>
    )
}

export default function UseContextTest() {
    return (
        <SiteProvider>
            <UseContextHeader />
            <UseContextBody />
            <UseContextForm />
        </SiteProvider>
    )
};

// ↑親子関係の場合は、Propsで渡せばかんたん。
// でも、階層が深いときはこの方式が便利
