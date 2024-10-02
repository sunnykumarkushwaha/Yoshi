import React from 'react'
import { useReducer } from 'react'

const Counter = () => {
    // const [state,dispatch]=

   const initailstate=0
   const reducerfunction=(current_state,action)=>{

    switch(action){
        case "add" :
            return   current_state+1
        case "subtract" :
                return   current_state - 1

        default : 
        return current_state
    }

    }


    const [state,dispatch]=useReducer(reducerfunction,initailstate)
    
  return (
    <>
        <div> 
        <button onClick={()=>{dispatch("add")}}>Add</button>
        <br></br>
        <br></br>
        <button onClick={()=>{dispatch("subtract")}}>subratct</button>
        </div>
        {state}
    </>
  )
}

export default Counter