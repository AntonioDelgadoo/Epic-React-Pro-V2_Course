// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

import {useCounter} from './03.hook'
import {CountProvider} from './03.context'

function CountDisplay() {
  const {count} = useCounter()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const {increment, decrement} = useCounter()

  return (
    <div>
      <button onClick={() => decrement(1)}>Decrement</button>
      <button onClick={() => increment(1)}>Increment</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
