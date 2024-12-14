import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCallback } from 'react';

function App() {
    let [password,setPassword]=useState("");
    let [length,setLength]=useState(8);
    let [numbersAllowed,setNumbersAllowed]=useState(false);
    let [symbolsAllowed,setSymbolsAllowed]=useState(false);

    const passwordGenerator=useCallback(()=>{
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if(numbersAllowed) str+="1234567890";
      if(symbolsAllowed) str+="~`!@#$%^&*/?,.|";

      
    },[])

  return (
    <>
     <div>
      <label>Password Generator</label>
      <br/>
      <input className='' placeholder={password} readOnly></input>
      <button>Copy</button>
      <br/>
      <div className='flex justify-around gap-x-2'>
          <input type="range" onChange={(e)=>{setLength(e.target.value)}}  min={8} max={100}>
          </input>
          <p>Length: {length}</p>
          <input type='checkbox' defaultValue={numbersAllowed} onChange={()=>{setNumbersAllowed((prev)=>!prev)}}>
          </input>
          <label>Numbers</label>
          <input type='checkbox' defaultValue={symbolsAllowed} onChange={()=>{setSymbolsAllowed((prev)=>!prev)}} >
          </input>
          <label>Symbols</label>
      </div>
      
     </div>
    </>
  )
}

export default App
