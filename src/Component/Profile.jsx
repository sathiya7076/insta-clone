import React, { useState,useEffect } from 'react'
import axios from 'axios'

function Profile() {

  const [profile, setprofile]=useState({ });
   const [follower, setfollower]=useState([]);
   const [unfollow, setunfollw]=useState([]);
  const [err, seterror]= useState(null);

useEffect(()=>{
  axios.get("http://localhost:3000/profile")
  .then(res=> {
    setprofile(res.data[0])
  })
  .catch(err=> seterror(err))

  axios.get("http://localhost:3000/followers")
.then(response=>{
  setfollower(response.data)
})
.catch((error)=>{
  seterror(error)
})

},[unfollow])



const handleonchange=(e)=>{
setprofile(prew=>({
  ...prew,[e.target.name]: e.target.value

}))
}
 
const handleonupdate=(e)=>{
  axios.put(`http://localhost:3000/profile/${profile.id}`,profile)
    .then(()=>{
      alert("updated successfully")
    })
    .catch(()=>{
      console.error(err)
      alert("updated failed")
    })
}



  const handleunfollow=(id)=>{
    axios.delete(`http://localhost:3000/followers/${id}`,)
    .then(()=>{
      alert("unfollow successfully")
    })
    .then(setfollower(!unfollow))

  
    .catch(()=>{
      console.log(Message.err)
      alert("failed unfollow")
    })
   }



 useEffect(()=>{
  fetch("http://localhost:3000/followers")
  .then(res=>res.json())
  .then(data=>setfollower(data))
  .catch(err=>seterror(err))
 },[])
  
 if(err){
  return <p>{err}</p>
 }

  return (
    <>
    <div className='box1'>
      <div className='two'>
        <div className='instapro'><img src={profile.profile_picture} alt="" /></div>
        <p className='onep'>{profile.username || ""}</p>
        <input type="text" name='username'onChange={handleonchange}value={profile.username || ""} /><br />
        <input type="text" name='profile_picture'onChange={handleonchange}value={profile.profile_picture} /><br />
        <button onClick={handleonupdate}> update</button>
        <div className='profsug'> <p>Suggesition</p>
        <p>follower</p></div>
        <div className='setfollow'>{
          follower.map((follower)=>{
            return(
              <><div >
              <div key={follower.id}>
                <div className='followerimg'><img className='followimg' src={follower.profile_picture} alt="" /></div>
                <p className='followerimgp'>{follower.username}</p></div>
                <button className='followerbtn' onClick={() => handleunfollow(follower.id)}>unfollow</button>
                
              </div>
              </>
            )
          })
          }
          
        </div>
     </div>
      
    </div> 
   
    </>
  )
}

export default Profile