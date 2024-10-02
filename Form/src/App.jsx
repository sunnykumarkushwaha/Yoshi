import { useState } from 'react'
import './App.css'
import { useRef } from 'react'

function App() {
const refs=useRef()
console.log(refs)

  const [count, setCount] = useState("sunny")
  const [pass,setpass]=useState("")

  const handlepass=(e)=>{
setpass(e.target.value)
console.log(e.target.value)
  }

  const handleall=(e)=>{
    // console.log(e.target.name)

    if(e.target.name=="fname"){
      const cap=e.target.value
      console.log(cap)
     setCount(cap)   
    }
    else{
      setpass(e.target.value)
      console.log("2paas",e.target.value)
    }
      }


      const handlesubmit=(e)=>{
e.preventDefault()
        console.log(refs.current.value)
      }

  return (
    <>
      <p>form </p>
      <form className='App'>
        <label  >First name:</label><br />
        <input type="text" id="fname" value={count} onChange={(e) => {
          setCount(e.target.value)
        }} name="fname" /><br />


<label  >Password :</label><br />
        <input type="text" id="pass" value={pass} onChange={handlepass} name="fname" /><br />

      </form>




      {/* give the name in every input  */}
      {/* give one event to all input  but  also should provide the  name  */}

      <p>form </p>
      <form className='App'>
        <label  >First name:</label><br />
        <input type="text" id="fname" value={count} onChange={handleall} name="fname" /><br />


<label  >Password :</label><br />
        <input type="text" id="pass" value={pass} onChange={handleall} name="password" /><br />

      </form>



      {/* uncontrolle  form  */}
       {/* add onSubmit function  and also provide the ref  */}


      <form  onSubmit={handlesubmit}>
      <label  >First name:</label><br />
        <input type="text"   ref={refs}   /><br />
        <button>submit</button>
        </form>
    </>
  )
}

export default App
