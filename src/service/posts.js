class Posts {
  constructor() {
    this.posts = [
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
    ];
  }

  // getters
  getAllPosts() {
    return this.posts;
  }

  // setters
  pushPost(post) {
    let posts = this.retrievePosts()
    const key = Object.keys(posts)
    posts = {...posts, key:post}
    this.updatePosts(posts)
  }

  // temp until a proper database can be set up
  instantiatePosts() {
    localStorage.setItem("posts", JSON.stringify(this.posts))
  }
  retrievePosts() {
    return JSON.parse(localStorage.getItem("posts"));
  }
  updatePosts(newPosts) {
    this.posts = newPosts
    this.instantiatePosts()
  }
}

export default new Posts();