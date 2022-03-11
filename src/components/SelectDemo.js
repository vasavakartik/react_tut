import React ,{useState} from 'react'

export const SelectDemo = () => {
    const [value, setvalue] = useState('volvo')

    var options = [
            {
                label:"Volvo",
                value:"Volvo"
            },
            {
                label:"Audi",
                value:"Audi"
            },
            {
                label:"Bmw",
                value:"Bmw"
            }

    ]
    
    var slectedoption
    const SelectChangeHandler =(e)=>{
        slectedoption = e.target.value;
        alert(slectedoption)
    }
    const genderchange =(e)=>{
        alert(e.target.value)
    }
  return (
    <div>
        <form>
            <select onChange={(e)=>{SelectChangeHandler(e)}}>
               {
                   options.map((option)=>{
                       return(<option value={option.value}>{option.label}</option>)
                   })
               }
            </select> <br></br>
                <label>Male</label> 
                <input type="radio" name='gender' value="male" onChange={(e)=>{genderchange(e)}}/>
                <label>female</label>
                <input type="radio" name='gender' value="female"onChange={(e)=>{genderchange(e)}}/>
                
           
        </form>
    </div>
  )
}
