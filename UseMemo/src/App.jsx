import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [add, setadd] = useState(0)
  const [sub, setsub] = useState(0)
 const value=useMemo(  function mutliply(){
  console.log("multiplu functionn call afer add value s changes ")
  return add*10
}, [add]) 


  const adding=()=>{
    console.log("add one ")
setadd(add+1)
  }
  const subtract=()=>{
    console.log("subtract one ")
    setsub(add-1)
  }


  return (
    <>
      <h3>Usememo hook </h3>
      <p> with usemmemo hook  react acan dstore the result of function call and reuse it when  the dependencies have not change rather than recalculatinng the value in every re render </p>
    {`mutiply value ${value}`}
    
    <br></br>
    <br></br>


      <button onClick={()=>adding()}>add</button>
      <span>

      {add}

      </span>
      <br></br>
      <br></br>
      <button onClick={()=>subtract()}>subtract</button>
      {/* <button onClick={}>subtract</button> */}

      <span>{sub}</span>
    </>
  )
}

export default App
