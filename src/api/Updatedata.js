import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export const Updatedata = () => {
    var id =useParams().id;
    const [data, setdata] = useState('')
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')

    const updateData =()=>{
        axios.get(`https://reqres.in/api/users/${id}`).then(res=>{
            setdata(res.data.data)
            console.log(res.data.data)
        })
    }

    useEffect(() => {
      
    
      updateData()
    }, [])

    const update =(e)=>{
        var updatedData={
            first_name:firstname,
            last_name:lastname,
            email:email
        }
        e.preventDefault()
        axios.put(`https://reqres.in/api/users/${id}`,updatedData).then(res=>{
            alert("Data Updated")
        })
    }
    
  return (
    <div>
        <form onSubmit={update}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={data.email}
    onChange={(e)=>setemail(e.target.value)}/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">firstName</label>
    <input type="text" class="form-control" id="exampleInputPassword1" value={data.first_name}
    onChange={(e)=>setfirstname(e.target.value)}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">lastName</label>
    <input type="text" class="form-control" id="exampleInputPassword1" value={data.last_name}
    onChange={(e)=>setlastname(e.target.value)}/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
