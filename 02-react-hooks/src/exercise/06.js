// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

import {
  fetchPokemon,
  PokemonDataView,
  PokemonForm,
  PokemonInfoFallback,
} from '../pokemon'

function PokemonInfo({pokemonName}) {
  const [state, setState] = React.useState({
    status: 'idle', // idle, pending, resolved, rejected
    pokemon: null,
    error: null,
  })

  React.useEffect(() => {
    if (!pokemonName) return

    setState({status: 'pending', pokemon: null, error: null})

    fetchPokemon(pokemonName)
      .then(data => {
        console.log(data)
        setState({status: 'resolved', pokemon: data, error: null})
      })
      .catch(error => {
        console.log(error)
        setState({status: 'rejected', pokemon: null, error: error})
      })
  }, [pokemonName])

  const {status, pokemon, error} = state

  switch (status) {
    case 'pending':
      return <PokemonInfoFallback name={pokemonName} />
    case 'resolved':
      return <PokemonDataView pokemon={pokemon} />
    case 'rejected':
      return <p style={{color: 'red'}}>Error: {error.message}</p>
    default:
      return <p>Submit a Pokemon</p>
  }
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  )
}

export default App
