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
    // user data retrieval
    getUserDataByUserId(id) {
        return users[id]; // trim password with database call
    }

    getUserDataByEmail(email) {
        for(let i = 0; i < Object.keys(users).length; i++) {
            console.log(users[i])
            if (users[i].email === email) {
                return users[i]
            }
        }
        return null;
    }

    getUserNameByUserId(id) {
        return users[id]["name"]
    }

    getUserEmailByUserId(id) {
        return users[id]["email"]
    }

    getUserDateByUserId(id) {
        return users[id]["dateofjoining"]
    }

    // editing user data
    changeUserNameByUserId(id, name) {
        users[id]["name"] = name;
    }

    changeUserEmailByUserId(id, email) {
        users[id]["email"] = email;
    }

    deleteUserById(id) {
        delete users[id]
        console.log(users)
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