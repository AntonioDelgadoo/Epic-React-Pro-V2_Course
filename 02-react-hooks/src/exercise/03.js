// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

function Name({name, onChange}) {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={onChange} />
    </div>
  )
}

function FavoriteAnimal({animal, onChange}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal} onChange={onChange} />
    </div>
  )
}

function Display({name, animal}) {
  return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
}

function App() {
  const [{name, animal}, setState] = React.useState({
    name: '',
    animal: '',
  })

  const handleChange = event => {
    const {id, value} = event.target
    setState(prevState => ({
      ...prevState,
      [id]: value,
    }))
  }

  return (
    <form>
      <Name name={name} onChange={handleChange} />
      <FavoriteAnimal name={animal} onChange={handleChange} />
      <Display name={name} animal={animal} />
    </form>
  )
}

export default App
