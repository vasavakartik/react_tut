import React from 'react'
import axios from 'axios'

export const ApiDemo = () => {
    const getData = () =>{

        axios.get("http://localhost:4000/roles").then(res =>{
            console.log(res.data.data);
        })
    }

    const postData = () =>{
        var data={
            name:'kartik',
            job:'engineer'
        }   
        axios.post("https://reqres.in/api/users",data).then(res=>{
            console.log(res)
        })
    }

    const deleteData = ()=>{
        var id=2;
        axios.delete("https://reqres.in/api/users" + id).then(res=>{
            console.log(res.status);
            if(res.status == 204){
                alert("Deleted Succesfully")
            }else{
                console.log("Not deleted")
            }

        })
    }

    const updateData = ()=>{
        var id=2;
        var data={
            name:"kartik",
            job:"crickter"
        }
        axios.put("https://reqres.in/api/users" +id,data).then(res=>{
            if(res.status ==200){
                alert("Updated Succesfully")
                console.log(res.data)
            }else{
                alert("Not Updated")
            }
        })
    }

  return (
    <div>
        <button onClick={getData}>Get Data</button><br>
        </br>
        <button onClick={postData}>Post Data</button><br>
        </br>
        <button onClick={deleteData}>Delete Data</button><br></br>
        <button onClick={updateData}>Update Data</button>
    </div>
  )
}
