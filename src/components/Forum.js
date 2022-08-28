import React from 'react';
import { useState } from 'react';

import Posts from '../service/posts';

import ForumHeader from './ForumHeader';
import ForumPost from './ForumPost';

const Forum = () => {
  const [errorMessages, setErrorMessages] = useState({});

  const [body, setBody] = useState(null)
  const [user] = useState(JSON.parse(localStorage.getItem("user")))
  const [updatedForum, setUpdatedForum] = useState(null)

  const handleBody = (e) => {
    setBody(e.target.value);
    if(body.length <= 250) {
      e.target.setCustomValidity("")
    } else {
      e.target.setCustomValidity("Your post cannot exceed 250 characters!")
    }
  }

  const handlePost = (e) => {
    e.preventDefault();
    Posts.createPost(user.id, body);
    setUpdatedForum(new Date())    
  }

  const handleDeletePost = (id) => {
    Posts.deletePostByPostId(id)
    setUpdatedForum(new Date())
  }

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  )

  return (
    <div className='forum-page'>
      <ForumHeader />
      
      <div className='forum-body'>
        <form className='post-form' onSubmit={handlePost}>
          <p className='post-header'>Body of post</p>
          <textarea className='post-text' placeholder='Enter a message under 250 characters' onChange={handleBody} type='text' name='body' required />
          {renderErrorMessage("body")}
          <input className='post-submit' type='submit' name='submit' value='Post' />
        </form>
        <div className='forum-feed'>
          {Posts.getAllPosts().map((post) => (
            <ForumPost handleDeletePost={handleDeletePost}
              userId={post.userId}
              creationDate={post.creationDate}
              body={post.body}
              key={post.id.value}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Forum