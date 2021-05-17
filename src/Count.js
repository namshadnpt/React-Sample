import React,{useState,useEffect} from 'react'

function Count() {
    const [count,setCount] = useState(1)
    const [count1,setCount1] = useState(1)

    useEffect(()=>{
        console.log('Mounting....');
        console.log('Updating Count....'+count);
        console.log('Count 1....'+count1);

         return ()=>{
             console.log('CleanUp...'+count);
         } 
    },[count,count1])
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Inc</button>
            <h1>Test : {count}</h1>
       
            <button onClick={()=>setCount1(count1+1)}>Incr</button>
            <h1>Test1 : {count1}</h1>

        </div>
    )
}

export default Count
