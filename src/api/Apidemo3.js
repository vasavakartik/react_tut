import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Deletedate } from './Deletedate'


export const Apidemo3 = () => {
    const [userList, setuserList] = useState([])
    

    const getData = () => {
        axios.get("https://reqres.in/api/users?page=2").then(res => {
            console.log(res.data.data)
            setuserList(res.data.data)
        })

    }
    useEffect(() => {
        getData()
    }, [])

    const deleteData=(id)=>{
            {
                axios.delete('https://reqres.in/api/users/${id}').then(res=>{
        alert("res.status")
    })
            }
    }



    return (
        <div className="container">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First_name</th>
                        <th scope="col">Last_name</th>
                        <th scope="col">email</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        userList.map((user) => {

                            return (
                                <tr>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <img src = {user.avatar}></img>
                                    </td>
                                    <td>
                                       <Link to={'table/data/$(user.id)'} className="btn btn-danger">Delete</Link>
                                       <button onClick={()=>{deleteData(user.id)}}>Delete</button>
                                       <Link to = {`/table/update/${user.id}`} className = "btn btn-primary">UPDATE</Link>
                                    </td>
                                    
                                </tr>
                            )
                        })


                    }

                </tbody>
            </table>

        </div>
    )
}