import React from 'react'
import Posts from './Posts'
import Story from './Story'

function Feed() {
  return (
    <div>
      
       <div className='divstory'> <Story/></div>
       <div className='divposts'><Posts/></div>
    </div>
  )
}

export default Feed
