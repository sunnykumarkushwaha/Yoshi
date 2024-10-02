import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Axois_post from './Axois_post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <p>axios post data in api</p>
     <Axois_post></Axois_post>
    </>
  )
}

export default App
