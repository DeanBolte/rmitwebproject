import React from 'react'

import Users from '../service/users'

const ForumPost = (props) => {
  return (
    <div>
      <div className='forum-post'>
        <div className='forum-post-header'>
          <p className='forum-post-user'>{Users.getUserNameByUserId(props.userId)}</p>
          <p className='forum-post-date'>{props.creationDate}</p>
        </div>
        <p className='forum-post-body'>{props.body}</p>
        <div className='forum-post-footer'>
          <p className='forum-post-delete' onClick={() => props.handleDeletePost(props.key)}>Delete Post</p>
        </div>
      </div>
    </div>
  )
}

export default ForumPost
