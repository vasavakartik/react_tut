import React from 'react'
import {useState} from 'react'
import axios from 'axios'

export const AddRole = () => {const [roleName, setroleName] = useState('')

const roleNameChangeHandler =(e)=>{
    setroleName(e.target.value)
}

var Data ={
    roleName:roleName
}

const submit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:4000/roles',Data).then(res =>{
        console.log(res.status)
        console.log(res.data)
    })
}

return (
  <div className="container">
<form onSubmit={submit}>
<div className=" form-group">
<label >Role Name</label>
<input type="text" class="form-control"  placeholder="Enter Role Name "
onChange={(e)=>roleNameChangeHandler(e)}/>

</div>

<button type="submit" class="btn btn-primary">Submit</button>

</form>
</div>
)
}
