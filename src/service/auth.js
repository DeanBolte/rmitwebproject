let users = [
    {   
        "id":"0",
        "name":"john",
        "email":"john@email.com",
        "password":"pass",
        "dateofjoining":"18 August 2022"
    },
    {   
      "id":"1",
      "name":"doe",
      "email":"doe@email.com",
      "password":"pass",
      "dateofjoining":"17 August 2022"
  },
];

class Auth {
    signin(email, password) {
        let user
            for(let i = 0; i < users.length; i++) {
              if (users[i].email === email) {
                user = users[i]
              }
            }
            if (user) {
              if (user.password === password) {
                localStorage.setItem("user", JSON.stringify(user))
                return true
              } else {
                // Wrong password
                return false
              }
            } else {
              // No user
              return false
            }
    }
}

export default new Auth();