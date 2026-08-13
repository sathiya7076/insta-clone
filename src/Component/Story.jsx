import React from 'react'
import { useState,useEffect } from 'react'
import { data, useNavigate } from "react-router-dom";

function Story() {

  const [story, setStory]=useState([]);
  const [ loading, setLoading]=useState(true);
  const [ err, setError]=useState(null);

   const navigate=useNavigate();

  useEffect(()=>{
    fetch("http://localhost:3000/story")
    .then(res=>res.json())
    .then(data=>setStory(data))
    .catch(error=>setError(error))
     .finally(()=>setLoading(false))

  },[])
  if(loading)
    return
  <p>loading....</p>

  return (
    <div className='d-flex all'>{
   story.map((item)=>(
<div
  key={item.id}
  onClick={() => navigate(`/story/${item.id}/${story.length}`)}
>
      <div className='insstory'><img src={item.profile_picture} alt="" /></div>
       <p>{item.username}</p>
    </div>
   ))
}
    </div>
  )
}

export default Story