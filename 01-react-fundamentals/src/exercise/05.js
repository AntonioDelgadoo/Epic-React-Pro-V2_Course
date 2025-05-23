// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const Box = ({style, className, children}) => {
  return (
    <div style={{...style}} className={`box ${className}`}>
      {children}
    </div>
  )
}

// const smallBox = (
//   <div style={{backgroundColor: 'blue'}} className="box box--small">
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div style={{backgroundColor: 'pink'}} className="box box--medium">
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div style={{backgroundColor: 'orange'}} className="box box--large">
//     large orange box
//   </div>
// )

function App() {
  return (
    <div>
      <Box style={{backgroundColor: 'blue'}} className="box--small">
        small lightblue box
      </Box>
      <Box style={{backgroundColor: 'pink'}} className="box--medium">
        medium pink box
      </Box>
      <Box style={{backgroundColor: 'orange'}} className="box--large">
        large orange box
      </Box>
    </div>
  )
}

export default App
