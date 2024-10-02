import React from 'react'
import { useState } from 'react'
const Child = (props) => {
    const [name,setname]=useState()
    const handlesubmit=(e)=>{
        e.preventDefault()
        props.get(name)

    }

    const msg="hey from child"
  return (
    <>
        <div>Child</div>

        <form onSubmit={handlesubmit}>
            <input type='text' name='firstname' value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <button >Submit</button>
        </form>


<div>
    {props.handlemessage(msg)}
</div>
    </>

    
  )
}

export default Child