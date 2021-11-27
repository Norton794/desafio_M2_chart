import React, {useState} from 'react';

const initialState = {
    enabled: false,
}

export const AppContext = React.createContext(initialState)

export default function Store(props){
const [state, setState] = useState(initialState)
function toggleEnabled(){
    setState(curr=>({...state, enabled: !curr.enabled}))
}
    return(
        <AppContext.Provider value={{
            enabled: state.enabled,
            toggleEnabled: ()=>toggleEnabled(),
        }}>
            {props.children}
        </AppContext.Provider>
    );
}