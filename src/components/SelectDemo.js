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
    const SelectChangeHandler =(e)=>{
        setvalue(e.target.value)
        console.log(value)
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
            </select>
        </form>
    </div>
  )
}
