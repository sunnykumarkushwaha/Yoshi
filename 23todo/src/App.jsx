import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toddlist from './Toddlist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Toddlist></Toddlist>
    </>
  )
}

export default App
