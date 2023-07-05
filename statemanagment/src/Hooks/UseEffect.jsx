import React,{useEffect,useState} from 'react'
import axios from 'axios';
const UseEffect = () => {
    const [uni,setUni] = useState();
    const getUni = async()=>{
        const {data} = await axios.get(`http://universities.hipolabs.com/search?country=kenya`);
        console.log(data);
        setUni(data);
    }
    useEffect(()=>{
        //CODE WHICH RUN ON FIRST RENDER
        console.log('Fecthing data')
        getUni();
    },[]);
console.log(uni)

  return (
    <div>
     {uni.map((myuni)=>(
        <div key={myuni.id}>
<p>{myuni.name}</p>
        </div>
     ))}
     <p>Check uni</p>
    </div>
  )
}

export default UseEffect
