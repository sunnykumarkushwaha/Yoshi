import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Test from './Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p> usereducer  Hooks </p>
      <p> alter natuive of usestate and used for complex login and stete management and  also  optimize the performance </p>

      {/* syntax */}
      const [stete,dispatch]=usereducer(reducer,intialastate)

      {/* in reducer  function  state  */}

      reducer(currentstaet,action)
      its return  a new state

       <Counter></Counter>
       <Test></Test>

    </>
  )
}

export default App
