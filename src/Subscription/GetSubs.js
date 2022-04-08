import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GetSubs = () => {

    const [subscriptionList, setsubscriptionList] = useState([])
    const getData = () => {
        axios.get("http://localhost:4000/subs").then((res) => {
            console.log(res.data.data);
            setsubscriptionList(res.data.data);
        });
    };
    const DeleteData = (_id) => {
        axios.delete(`http://localhost:4000/subs/${_id}`).then((res) => {
            toast.success('🦄 Data Deleted Successfully!', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });



            getData();

        });
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div className="content-wrapper card-body table-resposive col-md-10">
                <h1>This is Role List</h1>
                <h3 className="row-1 d-inline-flex">Roles</h3>
                <Link to="/addrole" className="btn btn-info float-right">
                    Add Role
                </Link>
                <table className="table table-hover table-striped">
                    <thead className="m-0 text-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Role Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {subscriptionList.map((subscription) => {
                            return (
                                <tr>
                                    <th scope="row">{subscription._id}</th>
                                    <td>{subscription.subscribeDate}</td>
                                    <td><button onClick={() => DeleteData(subscription._id)} className='btn btn-danger'>DELETE</button>
                                        <Link to={`/getsubs/updatesubs/${subscription._id}`} className="btn btn-primary">UPDATE</Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
