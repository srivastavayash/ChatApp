import React from 'react'

function Search() {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text" name="search" id="search" placeholder='Search the user' />          
        </div>
        <div className="userChat">
            <img src="https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="userChatInfo">
                <span>Yashika</span>
            </div>
        </div>
    </div>
  )
}

export default Search