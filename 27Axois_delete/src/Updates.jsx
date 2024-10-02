import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Updates = () => {

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

const handleUpadate=(e)=>{
    e.preventDefault()
    axios.put("https://jsonplaceholder.typicode.com/users/1",data).then((res)=>{
        console.log(res)
    })

}

const handledelete=(e)=>{
    e.preventDefault()
    axios.delete("https://jsonplaceholder.typicode.com/users/1").then((result)=>{
        console.log(result)
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
    <button onClick={handleUpadate}>Update</button>
    <button onClick={handledelete}>Delete</button>
   
   {/* <h3>{value}</h3> */}
    </>
  )
}

export default Updates