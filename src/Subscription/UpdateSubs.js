import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../_css/Dashboard.css'

export const UpdateSubs = () => {
    const [subscriptionList, setsubscriptionList] = useState([])
    const getData = () => {
      
        axios.get("http://localhost:4000/subs").then((res) => {
          console.log("rolename",res.data.data[0].subscription.subscribeDate);
          console.log("isActive",res.data.data[0].isActive);
    
          setsubscriptionList(res.data.data);
        });
      };
      const DeleteData = (_id) => {
        if(window.confirm('Are you sure'))
        {
          axios.delete(`http://localhost:4000/subs/${_id}`).then((res) => {
            alert(res.status);
          });
        }
      };
    
    
      useEffect(() => {
        getData();
      }, []);
    
    
  return (
    <div>
        <div className="col-md-10">
  <div className="content-wrapper card-body table-responsive p-0">
        <h3 className="row-1 d-inline-flex" >     User Details</h3>
        <button className="btn btn-info float-right">Add user</button>
    <table className="  table-hover table table-striped ">
      <thead className="m-0 text-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">SusbcribeDate</th>
          <th scope="col">Expdate</th>
        <th scope="col">isAdvRenew</th> 
          <th scope="col">advRenewdate</th>
         
          <th scope="col">Action</th>

          

        </tr>
      </thead>
      <tbody>
        {setsubscriptionList.map((subscription) => {
          return (
            <tr>
              <th scope="row">{subscription._id}</th>
              <td>{subscription.subscribeDate}</td>
              <td>{subscription.expdate}</td>
        
              
              <td>{ subscription.isAdvRenew}</td>
               
              <td>{ subscription.advRenewdate}</td>
              
             
              
      

      
              
              {/* <td>{user.isActive}</td> */}
              <td>
              <button onClick={()=> DeleteData(subscription._id)} className="btn btn-danger">DELETE</button>

                </td>            
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  </div>
    </div>
  )
}
