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
        const users = this.retrieveUsers();
        return users[id]; // trim password with database call
    }

    getUserDataByEmail(email) {
        const users = this.retrieveUsers();
        for(let i = 0; i < Object.keys(users).length; i++) {
            console.log(users[i])
            if (users[i].email === email) {
                return users[i]
            }
        }
        return null;
    }

    getUserNameByUserId(id) {
        const users = this.retrieveUsers();
        return users[id]["name"]
    }

    getUserEmailByUserId(id) {
        const users = this.retrieveUsers();
        return users[id]["email"]
    }

    getUserDateByUserId(id) {
        const users = this.retrieveUsers();
        return users[id]["dateofjoining"]
    }

    // editing user data
    changeUserNameByUserId(id, name) {
        const users = this.retrieveUsers();
        users[id]["name"] = name;
        this.updateUsers(users);
    }

    changeUserEmailByUserId(id, email) {
        const users = this.retrieveUsers();
        users[id]["email"] = email;
        this.updateUsers(users);
    }

    deleteUserById(id) {
        const users = this.retrieveUsers();
        delete users[id]
        this.updateUsers(users)
    }

    // temp until a proper database can be set up
    instantiateUsers() {
        localStorage.setItem("users", JSON.stringify(this.users))
    }
    retrieveUsers() {
        return JSON.parse(localStorage.getItem("users"));
    }
    updateUsers(newUsers) {
        this.users = newUsers
        this.instantiateUsers()
    }
}

export default new Users();