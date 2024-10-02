import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Updates from './Updates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>upadte and delet the data </p>
     <Updates></Updates>
    </>
  )
}

export default App
