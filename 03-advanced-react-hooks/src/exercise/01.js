// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

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

function Counter({initialCount = 0, step = 8}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const decrement = () => dispatch({type: 'DECREMENT', payload: step})
  const increment = () => dispatch({type: 'INCREMENT', payload: step})

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span> {state.count} </span>
      <button onClick={increment}>+</button>
    </div>
  )
}

function App() {
  return <Counter />
}

export default App
