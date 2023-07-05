import React,{createContext} from 'react'
import { useState } from 'react';

//import children
import Students from './students';
import Teacher from './teacher';

//createContext
export const SchoolMS = createContext();
export const Schools = () => {
//create state 
const [name,setName] = useState('DirectED');
const [student,setStudent] = useState('sam');
const [teacher,setTeacher] = useState('samkam')

  return (
//provider
    <SchoolMS.Provider  value={{name,setName,student,setStudent,teacher,setTeacher}}>
<Students />
<Teacher />
    </SchoolMS.Provider>
  )
}



//useContext
export default Schools
