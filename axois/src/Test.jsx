import React from 'react'
import { useEffect ,useState} from 'react'
import axios from 'axios'

const Test = () => {
    const  [one,setone]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{

            console.log(res)
            setone(res.data)
        })

    },[])
  return (
    <div>
        {one.map((e)=>{
            return (
                <div key={e.name}>{e.name} 
                </div>
            )
        })}
    </div>
       
  )
}

export default Test