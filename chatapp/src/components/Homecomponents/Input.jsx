import React from 'react'
import {img, attach} from '../../assets/index'
function Input() {
  return (
    <div className='input'>
        <input type="text" name="chatbox" id="chatbox" placeholder='type here....' />
        <div className="send">
         <img src={attach} alt="" />
         <input type="file" style={{display:"none"}} id='file' />
         <label htmlFor="file">
            <img src={img} alt="" />
         </label>
         <button>Send</button>
        </div>
    </div>
  )
}

export default Input