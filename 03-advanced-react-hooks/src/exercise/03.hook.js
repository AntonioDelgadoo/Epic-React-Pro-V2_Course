import * as React from 'react'
import {CountContext} from './03.context'

export function useCounter() {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error('useCounter must be used wrapped CounterProvider')
  }
  const {count, increment, decrement} = context
  return {count, increment, decrement}
}
