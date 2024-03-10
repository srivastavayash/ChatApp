import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <span className="logo">
            ChatApp
        </span>
        <div className="user">
        <img src="https://media.istockphoto.com/id/682621660/photo/your-target-should-be-a-healthier-lifestyle.jpg?s=612x612&w=0&k=20&c=VjarMi-hrvLbzBoIAJeZiH2K1h0uEDoyfwvI--kd96k=" alt="" />
        <span>Yash</span>
        <button>Logout</button>
        </div>

    </div>
  )
}

export default Navbar