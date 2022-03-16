import React ,{useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
export const Deletedate = () => {
var id =useParams().id;
console.log(id)

const delete1 =()=>{
    axios.delete('https://reqres.in/api/users/${id}').then(res=>{
        alert("res.status")
    })
}

useEffect(()=>{
    delete1()
    return ()=>{

    }
})

  return (
    <div></div>
  )
}
