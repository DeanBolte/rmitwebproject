class Posts {
  constructor() {
    this.posts = [
      {
        "id":0,
        "userId":"0",
        "creationDate":"18/08/2022",
        "body":"Hello World! this is a test post"
      },
      {
        "id":1,
        "userId":"1",
        "creationDate":"19/08/2022",
        "body":"Hello World! this is another from a different user test post"
      },
      {
        "id":2,
        "userId":"0",
        "creationDate":"20/08/2022",
        "body":"Hi, this is a final test post."
      }
    ];
  }

  // getters
  getAllPosts() {
    // returns all posts in reverse chronological order
    return this.retrievePosts().map(post => post).reverse();
  }

  // setters
  createPost(userId, body) {
    let posts = this.retrievePosts()
    const key = Object.keys(posts).length
    const date = new Date().toLocaleDateString("en-GB", { hour:"2-digit", minute:"2-digit"})
    this.pushPost({"id":key,"userId":userId,"creationDate":date,"body":body})
  }

  pushPost(post) {
    let posts = this.retrievePosts()
    posts.push(post)
    this.updatePosts(posts)
  }

  deletePostByPostId(postId) {
    let posts = this.retrievePosts();
    posts.splice(postId, 1);
    this.updatePosts(posts);
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