import React,{useContext} from 'react'
import { SchoolMS } from './Schools'
const Students = () => {
    const {name,setName,student,setStudent} = useContext(SchoolMS)
  const updateValue = ()=>{
setName('Moringa');
setStudent('john')
  }
    return (
    <div>
      <p>{student} is a student at {name}</p>
<button onClick={()=>updateValue()}>change value</button>
    </div>
  )
}

export default Students
