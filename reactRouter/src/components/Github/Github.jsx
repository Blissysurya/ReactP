import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {

    const data=useLoaderData();

    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Blissysurya")
    //     .then((res)=>res.json())
    //     .then((data)=>{setData(data)});
    // },[])

  return (
    <div className='text-center'>Github followers: {data.followers}</div>
  )
}

export default Github

export const  githubLoader=async ()=>{
    const response=await fetch("https://api.github.com/users/Blissysurya");
    return response.json();
}