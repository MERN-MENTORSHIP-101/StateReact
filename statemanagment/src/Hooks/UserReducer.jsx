import React,{useReducer} from 'react'

const reducer = (state,action)=>{
if(action.type == "increment"){
    return{
        name:state.name,
        age:state.age + 1
    }
}else{
    return{
        name:state.name,
        age:state.age - 1
    }
}
}


const UserReducer = () => {
    const [state,dispatch] = useReducer(reducer,{name:"samkam",age:23});
    
    const updateAge = ()=>{
        dispatch({type:"increment"})
    }

    const reduceAge = ()=>{
        dispatch({type:"decrement"})
    }

  return (
    <div>
      <p>{state.name},{state.age}</p>
      <button onClick={()=>updateAge()}>+</button>
      <button onClick={()=>reduceAge()}>-</button>
    </div>
  )
}

export default UserReducer
