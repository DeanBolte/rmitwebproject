import React from 'react';
import { useState } from 'react';

// placeholder back end
const users = [
  {   
      "id":"0",
      "name":"john",
      "email":"john@email.com",
      "password":"pass"
  },
  {   
    "id":"1",
    "name":"doe",
    "email":"doe@email.com",
    "password":"pass"
},
];

const Forum = () => {
  // place holder back end
  const [posts, setPosts] = useState([
    {
      "id":"0",
      "userId":"0",
      "creationDate":"18/08/2022",
      "body":"Hello World! this is a test post"
    },
    {
      "id":"1",
      "userId":"1",
      "creationDate":"19/08/2022",
      "body":"Hello World! this is another from a different user test post"
    },
    {
      "id":"2",
      "userId":"0",
      "creationDate":"20/08/2022",
      "body":"Hi, this is a final test post."
    },
    {
      "id":"2",
      "userId":"0",
      "creationDate":"20/08/2022",
      "body":"Hi, this is a final test post."
    },
    {
      "id":"2",
      "userId":"0",
      "creationDate":"20/08/2022",
      "body":"Hi, this is a final test post."
    },
    {
      "id":"2",
      "userId":"0",
      "creationDate":"20/08/2022",
      "body":"Hi, this is a final test post."
    },
  ])

  const currentUser = JSON.parse(window.localStorage.getItem("user"));

  // very inneficient will need to be replaced later
  const findUserNameByUserId = (id) => {
    for(let key in users) {
      if(users[key].id === id) {
        return users[key].name
      }
    }
  }

  const ForumPost = (props) => {


    return (
      <div className='forum-post'>
        <p className='forum-post-user'>{findUserNameByUserId(props.userId)}</p>
        <p className='forum-post-body'>{props.body}</p>
        <p className='forum-post-date'>{props.creationDate}</p>
      </div>
    )
  }

  return (
    <div className='forum-page'>
      <div className='forum-header'>
        <h1 className='forum-logo'>MY LAN</h1>
        <form className='forum-search'>
          <input className='forum-searchbar' type='text'/>
        </form>
        <div className='forum-profile'>
          <p>{currentUser.name}</p>
        </div>
      </div>
      
      <div className='forum-body'>
        <form className='forum-postform'>

        </form>
        <div className='forum-feed'>
          {posts.map((post) => (
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