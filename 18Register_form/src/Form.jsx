import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Form = () => {

    
    const data = { name: "", email: "", password: "" }
    
    const [inputdata, setinputdata] = useState(data)
    const [falage, setflage] = useState(false)


    function handledata(e) {
        console.log(e.target)
        // stote the  all past value and stote the nerw value as key  and value 
        setinputdata({ ...inputdata, [e.target.name]: e.target.value })


    } 
    

    useEffect(() => {
        console.log(inputdata,"fb")
    }, [inputdata, falage])


    const handlesubmit = (e) => {
        e.preventDefault()
        if (!inputdata.name || !inputdata.email || !inputdata.password) {
            alert(" all frield are mendetory")
            falage(false)
        }
        else {
            setflage(true)

        }

    }
    return (
        <>
            <pre>{(falage) ? <h2 className='ui-define'>hello {inputdata.name} and password is {inputdata.password} you have register sucessfuly</h2> : ""}</pre>
            <form className='conatiner' onSubmit={handlesubmit}>
                <div className='header'>
                    <h1>Registration Form</h1>

                </div>
                <div>
                    <input type='text' placeholder='enter your name' name='name' value={inputdata.name} onChange={handledata} />
                    <input type='text' placeholder='enter your email' name='email' value={inputdata.email} onChange={handledata} />
                    <input type='password' placeholder='enter your password' name='password' value={inputdata.password} onChange={handledata} />
                </div>
                <button type='submit'>submit</button>

            </form>
        </>
    )
}

export default Form