import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'

function App() {
  const [count, setCount] = useState()
  const [result,setresult]=useState()
function getdata(data){
  console.log(data)
  setresult(data)

}

  return (
    <>

      <p>Pass the data from child to parent </p>
     <Child  getdata={getdata}/>
     {result}
    
    </>
  )
}

export default App
