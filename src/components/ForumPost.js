import React from 'react'

import Users from '../service/users'

const ForumPost = (props) => {
  return (
    <div>
      <div className='forum-post'>
        <p className='forum-post-user'>{Users.getUserNameByUserId(props.userId)}</p>
        <p className='forum-post-body'>{props.body}</p>
        <p className='forum-post-date'>{props.creationDate}</p>
      </div>
    </div>
  )
}

export default ForumPost
