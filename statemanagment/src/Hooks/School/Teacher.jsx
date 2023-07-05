import React,{useContext} from 'react'
import { SchoolMS } from './Schools'
const Teacher = () => {
    const {name,setName,teacher,setTeacher} = useContext(SchoolMS)
  const updateValue = ()=>{
setName('ALX');
setTeacher('kevin')
  }
    return (
    <div>
      <p>{teacher} is a teacher at {name}</p>
<button onClick={()=>updateValue()}>change value</button>
    </div>
  )
}

export default Teacher
