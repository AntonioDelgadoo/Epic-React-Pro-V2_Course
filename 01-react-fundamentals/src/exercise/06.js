// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  const [form, setForm] = React.useState({
    firstName: '',
    userName: '',
  })

  const handleChange = ({id, value}) => {
    setForm(prevForm => ({
      ...prevForm,
      [id]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername({...form})
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          value={form.firstName}
          onChange={e => handleChange(e.target)}
        />
      </div>
      <div>
        <label htmlFor="userName">User Name:</label>
        <input
          id="userName"
          type="text"
          value={form.userName}
          onChange={e => handleChange(e.target)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = ({firstName, userName}) =>
    alert(`You entered: First Name: ${firstName} and UserName: ${userName}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
