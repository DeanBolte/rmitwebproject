import React from 'react';
import { useState } from 'react';

import ForumHeader from './ForumHeader';
import ForumPost from './ForumPost';

// urls
const url_forum = "http://localhost:3000/forum"
const url_settings = "http://localhost:3000/settings"

const Forum = (props) => {
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
    for(let key in props.users) {
      if(props.users[key].id === id) {
        console.log(props.users)
        return props.users[key].name
      }
    }
  }

  return (
    <div className='forum-page'>
      <ForumHeader currentUser={currentUser}/>
      
      <div className='forum-body'>
        <form className='forum-postform'>

        </form>
        <div className='forum-feed'>
          {posts.map((post) => (
            <ForumPost findUserNameByUserId={findUserNameByUserId}
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