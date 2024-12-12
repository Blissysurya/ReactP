import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);
  // let counter=15;
  const addValue=()=>{
    if(counter<20){
    setCounter(counter+1)
    }
    console.log("Value Added",counter);
    
  }
  const decreaseValue=()=>{
    if(counter>0){
    setCounter(counter-1)
    }
    console.log("Value Decreased",counter);
      
  }
  return (
    <>
     <h1>Cover Drive</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Increment Value</button>
     <button onClick={decreaseValue}>Decrement Value</button>
    </>
  )
}

export default App
