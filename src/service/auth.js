import Users from "./users"

class Auth {
    signin(email, password) {
        let user = Users.getUserDataByEmail(email)
        console.log(user)
        if (user) {
            if (user.password === password) {
                localStorage.setItem("user", JSON.stringify(user))
                return true
            } else {
                // Wrong password
                return false
            }
        } else {
            // No user found
            return false
        }
    }

    register(name, email, password) {
        let users = Users.retrieveUsers(); // temp until proper data base
        const key = Object.keys(users).length
        const date = new Date()
        const userData = {"id":key, "name":name, "email":email, "password":password, "dateofjoining":date}
        users = {...users, [key]:userData}
        Users.updateUsers(users)
        localStorage.setItem("user", JSON.stringify(userData))
    }
}

export default new Auth();