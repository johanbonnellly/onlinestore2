// setup data layer
// we need this to track the basket

import {createContext, useReducer, useContext } from 'react'

//Data Layer
export const StateContext = createContext ();

//Build a Provider
export const StateProvider = ({reducer, initialState, children  }) => (
    <StateContext.Provider value= {useReducer (reducer, initialState )} >
        {children}
    </StateContext.Provider>
)
export const useStateValue = () => useContext(StateContext);