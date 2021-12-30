const database = require("../config/dbConfig")



exports.createUser = (user) => {
    const query = `Insert into users (name,email,password,status) values(?,?,?,?);`

    return new Promise((resolve, reject) => {
        database.db.run(query, [user?.name, user?.email, user?.password, user?.status ? 1 : 0], (err, res) => {
            if (err) {
                reject(err)
            }
            console.log(res)
            resolve(res)
        })
    })

}

exports.getUser = () => {
    const query = `select * from users`
    return new Promise((resolve, reject) => {
        database.db.all(query, (err, res) => {
            if (err) {
                reject(err)
            }
            resolve(res)
        })
    })

}