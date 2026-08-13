import React from 'react'
import { useState,useEffect } from 'react'
import { useParams ,Link, useNavigate, data } from 'react-router-dom';



function Storyview() {

    const [story,setStory]=useState([]);
    const [err,setError]=useState(null);
    const {id,tot}=useParams();

    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`http://localhost:3000/story/${id}`)
        .then(res=>res.json())
        .then(data=>setStory(data))
        .catch(err=>setError(err.message))

    },[id])

    if (id>tot || id<=0){
    
    navigate("/")
}


  return (
    <div>

      <Link to={`/story/${Number(id) - 1} /${tot}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg></Link>

        <img src={story.image_url} alt="" />

    <Link to={`/story/${Number(id)+1}/${tot}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg></Link>
    </div>
  )
}

export default Storyview