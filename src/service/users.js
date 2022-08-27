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
    getUserDataByUserId(id) {
        return users[id]; // trim password with database call
    }

    // very inneficient will need to be replaced later
    findUserNameByUserId(id) {
        for(let key in users) {
            if(users[key].id === id) {
                console.log(users)
                return users[key].name
            }
        }
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