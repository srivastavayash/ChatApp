import React from 'react'
import Sidebar from './Homecomponents/Sidebar'
import Chat from './Homecomponents/Chat'

function Home() {
  return (
    <div className='home'>
        <div className="container">
         <Sidebar/>
         <Chat/>
        </div>
    </div>
  )
}

export default Home