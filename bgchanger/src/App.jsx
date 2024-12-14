  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'

  function App() {
  
    let [color,setColor]=useState("bg-blue-500")
    return (
      <>
      <div className={`${color} w-screen h-screen flex flex-col justify-end`}>
      
      <footer className=' flex justify-between bg-white rounded-3xl p-4'>
      <button onClick={()=>{setColor("bg-blue-500")}} className='bg-blue-500 rounded m-4 w-24 h-8 shadow-lg'>
      Blue
      </button>
      <button onClick={()=>{setColor("bg-red-500")}} className='bg-red-500 rounded m-4 w-24 h-8 shadow-lg'>
      Red
      </button>
      <button onClick={()=>{setColor("bg-green-500")}} className='bg-green-500 rounded m-4 w-24 h-8 shadow-lg'>
      Green
      </button>
      <button onClick={()=>{setColor("bg-[lavender]")}} className='bg-[lavender] rounded m-4 w-24 h-8 shadow-lg'>
      Lavender
      </button>
      <button onClick={()=>{setColor("bg-black")}} className='bg-black text-white rounded m-4 w-24 h-8 shadow-lg'>
      Black
      </button>
      <button onClick={()=>{setColor("bg-[pink]")}} className='bg-[pink] rounded m-4 w-24 h-8 shadow-lg'>
      Pink
      </button>
      <button onClick={()=>{setColor("bg-teal-500")}} className='bg-teal-500 rounded m-4 w-24 h-8 shadow-lg'>
      Teal
      </button>
      <button onClick={()=>{setColor("bg-rose-500")}} className='bg-rose-500 rounded m-4 w-24 h-8 shadow-lg'>
      Rose
      </button>
      </footer>
      </div>
      </>
    )
  }

  export default App
