import React,{useState} from 'react'

export const EmployeeRagistration = () => {
    const [UserName, setUserName] = useState('')
    const  [UserEmail, setUserEmail] = useState('')
    const [UserPassword, setUserPassword] = useState('')
    const [UserAge, setUserAge] = useState('')

    const UserNameHandler = (e) =>{
        setUserName(e.target.value)
    }
    const UserEmailHandler =(e) =>{
        setUserEmail(e.target.value)
    } 
    const UserPasswordHandler = (e) =>{
        setUserPassword(e.target.value)
    }
    const UserAgeHandler = (e) =>{
        setUserAge(e.target.value)
    }
    const Submit =(e) =>{
        e.preventDefault()
        
    }

  return (
    <div>
        <form onSubmit={Submit}>
            <table>
                <tr>
                    <td>UserName</td>
                    <td><input type="Name" name="UserName" placeholder="Enter Name" onChange={(e)=>{UserNameHandler(e)}} ></input></td>
                </tr>

                <tr>
                    <td>UserEmail</td>
                    <td><input type="Email" name="UserEmail" placeholder="Enter Email" onChange={(e)=>{UserEmailHandler(e)}}></input></td>
                </tr>

                <tr>
                    <td>UserPassword</td>
                    <td><input type="Password" name="UserPaswword" placeholder="Enter Password" onChange={(e)=>{UserPasswordHandler(e)}}></input></td>
                </tr>

                <tr>
                    <td>UserAge</td>
                    <td><input type="number" name="UserAge" placeholder="Enter Age" onChange={(e)=>{UserAgeHandler(e)}}></input></td>
                </tr>

                <tr>
                    <td><button type='submit'>Submit</button></td>
                </tr>

            </table>
        </form>
    </div>
  )
}
