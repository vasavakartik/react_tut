import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios'



export const Adduser = () => {
  const [firstName, setfirstName] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [address, setaddress] = useState('')
  const [roleList, setroleList] = useState([])
  const getData = ()=>{
    axios.get("http://localhost:4000/roles").then((res) => {
      console.log(res.data.data);
      setroleList(res.data.data);
      
    
    });
    
  };
  
  useEffect(() => {
    getData();
  }, []);

 

    var Data ={
      firstName: firstName,
      email: email,
      password: password,
      phonenumber: phonenumber,
      address:address,
      roleList:roleList
    }

    const submit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/users',Data).then(res =>{
            console.log(res.status)
            console.log(res.data)
        })
    }
    
  return (
    <div className='App'>
      <h1>User</h1>
    <form onSubmit={submit}>
      <div class="form-group">
        <label>First Name</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setfirstName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setemail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setpassword(e.target.value)}
        />

        <label>Mobail Number</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setphonenumber(e.target.value)}
        />

        {/* Gendor */}
        <label>Address</label>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setaddress(e.target.value)}
        />
        
        <label>ROLE</label>
                    <select className="form-control select2 select2-hidden-accessible" data-select2-id="1" tabindex="-1" aria-hidden="true">
                  {roleList.map((role)=>{
                    return(
                    <option selected="selected" data-select2-id="3">{role.roleName}</option>
                    
                    )})}
                    </select>
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>

    </form>
  </div>
  )
}
