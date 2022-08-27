import React from 'react';

import Posts from '../service/posts';

import ForumHeader from './ForumHeader';
import ForumPost from './ForumPost';

const Forum = () => {
  return (
    <div className='forum-page'>
      <ForumHeader />
      
      <div className='forum-body'>
        <form className='forum-postform'>

        </form>
        <div className='forum-feed'>
          {Posts.getAllPosts.map((post) => (
            <ForumPost
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