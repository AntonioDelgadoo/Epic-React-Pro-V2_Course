// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

function App() {
  const [items, setItems] = React.useState([...allItems])

  const addItem = () => {
    const itemIds = items.map(i => i.id)
    setItems([...items, allItems.find(i => !itemIds.includes(i.id))])
  }

  const removeItem = id => {
    setItems(items.filter(i => i.id !== id))
  }

  const updateItem = ({name, value}) => {
    // const updatedItems = items.map(item => {
    //   let updatedItem = {...item}
    //   if (item.id === name) {
    //     updatedItem = {...updatedItem, value}
    //   }
    //   return updatedItem
    // })
    // setItems([...updatedItems])
    const updatedItems = items.map(item =>
      item.id === name ? {...item, value} : item,
    )
    setItems([...updatedItems])
  }

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul>
        {items.map(({id, value}) => (
          // 🐨 add a key prop to the <li> below. Set it to item.id
          <li key={id}>
            <button onClick={() => removeItem(id)}>remove</button>{' '}
            <label htmlFor={`${id}-input`}>{id}</label>{' '}
            <input
              id={`${id}-input`}
              value={value}
              name={id}
              onChange={e => updateItem(e.target)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
