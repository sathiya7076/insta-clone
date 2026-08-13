import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Feed from './component/feed'
import Suggesition from './component/suggesition'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="row">
      <div className="col-3 "><Navbar></Navbar></div>
    <div className="col-6 " ><Feed/> </div>
    <div className="col-3 " ><Suggesition/></div>
</div>

    </>
   
  )
}

export default App
