import React,{useState} from 'react'

//useState
const UseState = () => {
    const [age,setAge] = useState(23);
    console.log(age);
    const increaseAge = ()=>{
        setAge(age + 1)
    }
    const decreaseAge = ()=>{
        setAge(age - 1)
    }
  return (
    <div>
      <p>{age}</p>
      <button onClick={()=>increaseAge()}>Increase</button>
      <button onClick={()=>decreaseAge()}>Decrease</button>
    </div>
  )
}

export default UseState
