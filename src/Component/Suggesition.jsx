import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

function Suggesition() {

  const [profile, setprofile]=useState([])
  const [suggession,setsuggesition]=useState([])
  const [error,seterror]=useState(null)

  useEffect(()=>{
    fetch("http://localhost:3000/profile")
    .then(res=> res.json())
    .then(data=> setprofile(data))
    .catch((error)=>{
console.error("fetch error:",error);
seterror(error.message)
    })
      
    },[])


    useEffect(()=>{
      fetch("http://localhost:3000/suggession")
      .then(res=>res.json())
      .then(data=>setsuggesition(data))
      .catch(error=>seterror(error))
    },[ ])


    // useEffect(()=>{
    //   fetch("http://localhost:3000/suggession")
    //   .then(res=>res.json())
    //   .then(data=>setsuggesition(data))
    //   .catch(error=>seterror(error))
    // },[])

    const handleunfollow = async (id,profile_picture,username)=>{
      axios.post(`http://localhost:3000/followers`,{"id":id,"profile_picture":profile_picture,"username":username})
      .then(res=> alert("followed successfully:",username))
       .catch(()=>{
      console.error(err)
      alert("updated failed")
    })
    } 

    if(error){
      return
      <p>{error}</p>
    }

  return (
    <div className='asds'>
     
    <div className='profile1'>{
      profile.map((profile)=>{
        return (
       <>
        
        <div className='proimg' key={profile.id}>
          <div> <img className='' src={profile.profile_picture} alt="" /></div>
          <p>{profile.username}</p> 
            <div className='swt'> Switch</div>
        </div>
        <div className='noti'>
        <div className='sugg'> Suggesition</div>
        <a className='foll'> Follow</a></div>

        <div className='follower'>{
          suggession.map((suggession)=>{
            return (
              <>
              <div className='follower1' key={suggession.id}>
                  <div><img  src={suggession.profile_picture} alt="" /></div>
                  <p className=''>{suggession.username}</p>
                  <div className='new3'>
                    <a href='' className=' newfol'onClick={()=>handleunfollow(suggession.id,suggession.profile_picture,suggession.username)}>follow</a>
                  </div>
                <div></div>
              </div>
              </>
            )
          })
          }
          
          
        </div>
        </>
        );
      })
      }
     
    </div>
    
    </div>
  )
}


export default Suggesition