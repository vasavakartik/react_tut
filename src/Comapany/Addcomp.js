import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Addcomp = () => {
    const [Info, setInfo] = useState('')
    const [CompanyName, setCompanyName] = useState('')
   
      
      useEffect(() => {
       
      }, []);

      var Data ={
        CompanyName:CompanyName,
        Info:Info
      }
  
      const submit = (e)=>{
          e.preventDefault()
          axios.post('http://localhost:4000/comp',Data).then(res =>{
              console.log(res.status)
              console.log(res.data)
          })
      }
    
  return (
    <div className='App'>
        <form onSubmit={submit}>
            <div className='form-group'>
        <label>Company Name</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <label>Info</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setInfo(e.target.value)}
        />
        <Link to="/dashboard">
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
      </Link>
        </div>


        </form>
    </div>
  )
}
