import React ,{useState,useEffect} from 'react'
import './Dividir.css'




const Dividir =()=>{
const  [status, setStatus]  = useState("Impar")
const [number, setNumber] = useState(0);
useEffect(function(){
    setStatus(number % 2===0 ? "par":"Impar")
},[number]);

const click = (event) =>{
    setNumber(parseInt(event.target.value));
}


return(
<>
<div className='container'>
<h1>Par ou Impar</h1>
<span>Status:</span>
<span className='status' >{status}</span>
<input type="number" value={number} onChange={click}/>
</div>




</>

)
}
export default Dividir;