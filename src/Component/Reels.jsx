import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { data } from 'react-router-dom';
function Reels() {

const [reels , setReels]=useState([]);
const  [err, setError]=useState(null);

useEffect(()=>{
   fetch("http://localhost:3000/Reels")
   .then(res=>res.json())
   .then(data=>setReels(data))
   .catch(err=>setError(err.message))
   

},[])


  return (
    <>
    <div>
    {
      reels.map((reel)=>{
        return (

        <div key={reel.id}>
          <img className='photo' src={reel.profile_picture} alt="" />
          <p className='peru'>{reel.username}</p>
          <video className='postimg' src={reel.video_url}></video>

        </div>)
      })
    }

    </div>
    </>
  )
}

export default Reels