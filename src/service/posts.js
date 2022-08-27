const posts = [
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
];

class Posts {
    getAllPosts() {
        return posts;
    }
}

export default new Posts();