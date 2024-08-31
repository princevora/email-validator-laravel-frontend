'use client'

import { createContext, useContext, useState } from "react";

export const InputContext = createContext();

export const useInputContext = () => {
    return useContext(InputContext);
}

const InputContextProvider = ({ children }) => {
    const [state, setState] = useState('');
    
    return (
        <InputContext.Provider value={{state, setState}}>
            {children}
        </InputContext.Provider>
    )
}

export default InputContextProvider;