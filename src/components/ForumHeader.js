import React from 'react'

// urls
const url_forum = "http://localhost:3000/forum"
const url_settings = "http://localhost:3000/settings"

const ForumHeader = (props) => {
  const goToSettings = () => {
    window.location = url_settings;
  }

  return (
    <div className='forum-header'>
      <h1 className='forum-logo'>MY LAN</h1>

      <form className='forum-search'>
        <input className='forum-searchbar' type='text'/>
      </form>

      <div className='forum-profile' onClick={goToSettings}>
        <p className='forum-profile-text'>{props.currentUser.name}</p>
      </div>
    </div>
  )
}

export default ForumHeader
