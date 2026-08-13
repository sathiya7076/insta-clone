import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Addpost() {

  const[post, setpost]= useState({
    id:"",
        username: '',
        profile_picture: '',
        image_url: '',
        caption: '',
        likes: 0,
        comments: []
});

  const handlechange=(e)=>{
    const {name,value}=e.target;
    setpost(pre=>({
      ...pre,[name]:value
    }

    ))
  }
   
  const handlesubmit=async()=>{
    try{
      const postData={
        ...post,
        likes:Number(post.likes),
        Comments:[]
      }
      await axios.post("http://localhost:3000/post",postData);
      alert("post is created succesfully")
      setpost({
        id:"",
        username: '',
        profile_picture: '',
        image_url: '',
        caption: '',
        likes: 0,
        comments: []

      });
    }
    catch(err){
      console.log(err);
      alert(" post created is failed");
    }
  }

  return (
    <div className='posts'>
      <h1>create post</h1>
      <label htmlFor="id">id</label>
      <input type="text" name='id'value={post.id} onChange={handlechange} /><br />
      <label htmlFor="pa">usernamr</label>
      <input type="text"name='username'value={post.username}onChange={handlechange} /><br />
      <label htmlFor="pro">profile pic</label>
      <input type="text" name='profile_picture'value={post.profile_picture} onChange={handlechange} /><br />
      <label htmlFor="img">img url</label>
      <input type="text" name='image_url'value={post.image_url} onChange={handlechange} /><br />
      <label htmlFor="caption">caption</label>
      <input type="text" name='caption'value={post.caption} onChange={handlechange} /><br />
      <label htmlFor="lk">like</label>
      <input type="text" name='likes'value={post.likes} onChange={handlechange} /><br />
       <label htmlFor="cmt">comments</label>
      <input type="text" name='comments'value={post.comments} onChange={handlechange} /><br />

      <button onClick={handlesubmit}> add post</button>
    </div>
  )
}
//json-server --watch dummydata.json --port 3000
export default Addpost