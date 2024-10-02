import { useState } from 'react'
import Child from './Child'
import './App.css'

function App() {
  const [count, setCount] = useState("")
  const data=name
  function getdata(e){
    console.log(e)
    setCount(e)
  }

  const handlemessage=(child)=>{
    return <div>
      <p> message from child is {child}</p>
    </div>

  }

  return (
    <>
    <div> lifting State  </div>
    <div> pas the ddata child to parent</div>
    <Child get={getdata}  handlemessage={handlemessage}></Child>
    {count}
     
     
    </>
  )
}

export default App
