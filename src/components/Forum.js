import React from 'react';
import { useState } from 'react';

import Posts from '../service/posts';

import ForumHeader from './ForumHeader';
import ForumPost from './ForumPost';

const Forum = () => {
  const [body, setBody] = useState(null)
  const [user] = useState(JSON.parse(localStorage.getItem("user")))

  const handleBody = (e) => {
    setBody(e.target.value);
  }

  const handlePost = (e) => {
    e.preventDefault();
    Posts.createPost(user.id, body);
  }

  const handleDeletePost = (id) => {
    Posts.deletePostByPostId(id)
  }

  return (
    <div className='forum-page'>
      <ForumHeader />
      
      <div className='forum-body'>
        <form className='post-form' onSubmit={handlePost}>
          <p className='post-header'>Body of post</p>
          <textarea className='post-text' onChange={handleBody} type='text' name='body' required />
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