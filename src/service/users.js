class Users {
    constructor() {
        this.users = {
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
    }

    // user data retrieval
    getUserDataByUserId(id) {
        return this.users[id]; // trim password with database call
    }

    getUserDataByEmail(email) {
        for(let i = 0; i < Object.keys(this.users).length; i++) {
            console.log(this.users[i])
            if (this.users[i].email === email) {
                return this.users[i]
            }
        }
        return null;
    }

    getUserNameByUserId(id) {
        console.log(this.users)
        return this.users[id]["name"]
    }

    getUserEmailByUserId(id) {
        return this.users[id]["email"]
    }

    getUserDateByUserId(id) {
        return this.users[id]["dateofjoining"]
    }

    // editing user data
    changeUserNameByUserId(id, name) {
        this.users[id]["name"] = name;
    }

    changeUserEmailByUserId(id, email) {
        this.users[id]["email"] = email;
    }

    deleteUserById(id) {
        delete this.users[id]
        console.log(this.users)
    }

    // temp until a proper database can be set up
    retrieveUsers() {
        return this.users;
    }
    updateUsers(newUsers) {
        this.users = newUsers
    }
}

export default new Users();