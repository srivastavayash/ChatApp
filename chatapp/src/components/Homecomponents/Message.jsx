import React from 'react'

function Message() {
  return (
    <div className='message owner'>
        <div className="messageInfo">
         <img src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFkeXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
         <span>Just now</span>
        </div>
        <div className="messageContent">
         <p>hello</p>
         <img src="https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFkeXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default Message