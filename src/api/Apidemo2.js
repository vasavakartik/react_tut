
import React, { useState } from 'react'
import axios from 'axios'


export const Apidemo2 = () => {
    const [name, setname] = useState('')
    const [job, setjob] = useState('')

    const namechangeHandler =(e)=> {
        setname(e.target.value)
    }

    const jogchangeHandler =(e) =>{
        setjob(e.target.value)
    }

    var data = {

        name:name,
        job:job
    }

    const submit = (e)=>{
        e.preventDefault()
        axios.post('https://reqres.in/api/users',data).then(res=>{

            console.log(res.status)
            console.log(res.data)
        })
    }
    return (
        <div className = "container">
            <form onSubmit ={submit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter Name"
                    onChange ={(e)=>namechangeHandler(e)}
                    />
                    
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">JOb</label>
                    <input type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter Job"
                    onChange = {(e)=>jogchangeHandler(e)}
                    />
                    
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
               
            </form>


        </div>
    )
}
