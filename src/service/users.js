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
        const user = users[id];
        if(user) {
            return user; // trim password with database call
        } else {
            return false;
        }
    }

    getUserDataByEmail(email) {
        const users = this.retrieveUsers();
        for(let i = 0; i < Object.keys(users).length; i++) {
            if (users[i] && users[i].email === email) {
                return users[i]
            }
        }
        return null;
    }

    getUserNameByUserId(id) {
        const users = this.retrieveUsers();
        const user = users[id];
        if(user) {
            return user["name"]; // trim password with database call
        } else {
            return false;
        }
    }

    getUserEmailByUserId(id) {
        const users = this.retrieveUsers();
        const user = users[id];
        if(user) {
            return users["email"]; // trim password with database call
        } else {
            return false;
        }
    }

    getUserDateByUserId(id) {
        const users = this.retrieveUsers();
        const user = users[id];
        if(user) {
            return user["dateofjoining"]; // trim password with database call
        } else {
            return false;
        }
        
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