let users = {
    0:{   
        "id":"0",
        "name":"john",
        "email":"john@email.com",
        "password":"pass",
        "dateofjoining":"18 August 2022"
    },
    1:{   
      "id":"1",
      "name":"doe",
      "email":"doe@email.com",
      "password":"pass",
      "dateofjoining":"17 August 2022"
  },
};

class Users {
    getUserByUserId(id) {
        
    }

    // temp until a proper database can be set up
    retrieveUsers() {
        return users;
    }
    updateUsers(newUsers) {
        users = newUsers
    }
}

export default new Users();