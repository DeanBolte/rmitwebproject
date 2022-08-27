import Users from "./users"

class Auth {
    signin(email, password) {
        let users = Users.retrieveUsers(); // temp until proper database
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

    register(name, email, password) {
        let users = Users.retrieveUsers(); // temp until proper data base
        const key = Object.keys(users).length + 1
        const date = new Date()
        const userData = {"id":key, "name":name, "email":email, "password":password, "dateofjoining":date}
        users = {...users, key:userData}
        Users.updateUsers(users)
        localStorage.setItem("user", JSON.stringify(userData))
    }
}

export default new Auth();