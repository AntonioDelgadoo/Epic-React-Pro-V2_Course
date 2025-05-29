import * as React from 'react'

export const CountContext = React.createContext()

export const CountProvider = ({children}) => {
  const [{count}, dispatch] = React.useReducer(countReducer, {
    count: 0,
  })

  const decrement = payload => dispatch({type: 'DECREMENT', payload})
  const increment = payload => dispatch({type: 'INCREMENT', payload})

  return (
    <CountContext.Provider value={{count, increment, decrement}}>
      {children}
    </CountContext.Provider>
  )
}

function countReducer(state, action) {
  console.log(state, action)
  const {type, payload} = action
  switch (type) {
    case 'DECREMENT':
      return {...state, count: state.count - payload}
    case 'INCREMENT':
      return {...state, count: state.count + payload}
    default:
      return {...state}
  }
}
