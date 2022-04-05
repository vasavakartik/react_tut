import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserSubs = () => {

const [SubList, setSubList] = useState([])
const getData=()=>{
  axios.get("http://localhost:4000/subs").then((res)=>{
    console.log(res.data.data);
    setSubList(res.data.data);
  });
};
const DeleteData =(_id)=>{
  axios.delete(`http://localhost:4000/subs/${_id}`).then((res)=>{
      alert(res.data);
      getData();
  });
};

useEffect(() => {
  getData();
  }, [])

  return (
    <table class="table table-hover">
  <thead className="table table-striped table-light">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Subscribe Date</th>
      <th scope="col">Exp Date</th>
      <th scope="col">Is Advance Renew</th>
      <th scope="col">Advance Renew Date</th>
      <th scope="col">Update & Delete</th>
     
    </tr>

  </thead>
  <tbody>
  {SubList.map((subscription) => {
            return (
              <tr>
                <th scope="row">{subscription._id}</th>
                <td>{subscription.subscribeDate}</td>
                <td>{subscription.expdate}</td>
                <td>{subscription.isAdvRenew}</td>
                <td>{subscription.advRenewdate}</td>
                <td><button onClick={() => DeleteData(subscription._id)} className='btn btn-danger'>DELETE</button>
                <Link to={`/*/${subscription._id}`} className="btn btn-primary">UPDATE</Link>
                </td>
              </tr>
            );
          })}
  </tbody>
</table>
  )
}

export default UserSubs