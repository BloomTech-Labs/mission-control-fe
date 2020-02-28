import React, {useState, createContext} from 'react'

export const LabelContext =  createContext();

export const LabelProvider = props => {
    const [label, setLabel] = useState({id: '', name: '', color: ''})

    return (
    <LabelContext.Provider value={{label, setLabel}}>{props.children}</LabelContext.Provider>
    )
}