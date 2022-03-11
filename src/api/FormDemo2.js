import React, { useRef } from 'react'

export const FormDemo2 = () => {
    var name = useRef()
    const submit =(e)=>{
        e.preventDefault()
        console.log(name.current.value)
    }
  return (
    <div>
        <form onSubmit={submit}>
            <table>
                <tr>
                    <td>Enter Name</td>
                    <td><input type="text" ref={name}></input></td>
                </tr>
                <tr>
                    <button type='submit'>Submit</button>
                </tr>
            </table>
        </form>
    </div>
  )
}
