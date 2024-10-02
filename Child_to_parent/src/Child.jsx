import React from 'react'
import { useState } from 'react'


const Child = (props) => {
    const [count, setCount] = useState()

    const handlesubmit=(e)=>{
        e.preventDefault()
      props.getdata(count)



    }
  return (
    <div>

    <form onSubmit={handlesubmit}>
      <input type='text' value={count} onChange={(e) => {
        setCount(e.target.value)
      }} />
      <button>Submit</button>
    </form>

  </div>
  )
}

export default Child