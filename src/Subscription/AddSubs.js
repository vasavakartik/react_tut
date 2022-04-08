import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'



export const AddSubs = () => {

    const [subscribeDate, setsubscribeDate] = useState('')
    const [expdate, setexpdate] = useState('')
    const [advRenewdate, setadvRenewdate] = useState('')
    const [isAdvRenew, setisAdvRenew] = useState('')

    const getData = () => {
        axios.get("http://localhost:4000/subs").then((res) => {
            console.log(res.data.data);


        });

    };

    useEffect(() => {
        getData();
    }, []);

    var Data = {
        subscribeDate:subscribeDate,
        expdate: expdate,
        advRenewdate: advRenewdate,
        isAdvRenew:isAdvRenew
    }
    const submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:4000/subs', Data).then(res => {
            console.log(res.status)
            console.log(res.data)
        })
    }
    return (
        <div>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label>subscribeDate</label>
                    <input
                    placeholder='YY-MM-DD'
                        type="text"
                        class="form-control"
                        onChange={(e) => setsubscribeDate(e.target.value)}
                    />

                    <label>expdate</label>
                    <input
                     placeholder='YY-MM-DD'
                        type="text"
                        class="form-control"
                        onChange={(e) => setexpdate(e.target.value)}
                    />

                    <label>advRenewdate</label>
                    <input
                     placeholder='YY-MM-DD'
                        type="text"
                        class="form-control"
                        onChange={(e) => setadvRenewdate(e.target.value)}
                    />

                    <label>is Adv Date</label>
                    <input
                        type="text"
                        class="form-control"
                        onChange={(e) => setisAdvRenew(e.target.value)}
                    />




                </div>

                <button type="submit" class="btn btn-primary">
                    Submit
                </button>

            </form>
        </div>
    )
}
