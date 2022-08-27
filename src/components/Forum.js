import React from 'react';
import { useState } from 'react';

import ForumHeader from './ForumHeader';

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

// urls
const url_forum = "http://localhost:3000/forum"
const url_settings = "http://localhost:3000/settings"

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

  const [currentUser, setCurrentUser] = useState(JSON.parse(window.localStorage.getItem("user")));

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
      <ForumHeader currentUser={currentUser}/>
      
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