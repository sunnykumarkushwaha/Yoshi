import React from 'react'
import { useState } from 'react'

import axios from "axios"

const Axois_post = () => {
    const inputdata={firstname:"",lastname:""}
    const [data,setdata]=useState(inputdata)
    const [value,setvalue]=useState()


    const handleinput=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
}

const handlesubmit=(e)=>{
     e.preventDefault()
     
     axios.post("https://jsonplaceholder.typicode.com/users",data).then((res)=>{
        console.log(res)
        setvalue(res.data)
        // setvalue(res)



     }) 
}

  return (
    
<>
    <label>first name</label>
    <input type='text' name='firstname' value={data.firstname} placeholder='enter the first name' onChange={handleinput}/>
    <br></br>
    <br></br>
    <br></br>
    
    <label>lats name</label>
    <input type='text' name='lastname' value={data.lastname} placeholder='enter the last  name' onChange={handleinput}/>
    <button onClick={handlesubmit}>submit</button>
   <h3>{value.firstname}</h3>
    
</>
  )
}

export default Axois_post