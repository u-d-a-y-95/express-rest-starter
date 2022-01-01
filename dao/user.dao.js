const database = require("../config/dbConfig")






exports.getUserByEmail = (user) => {
    const query = `select * from users where email = ?;`

    return new Promise((resolve, reject) => {
        database.db.all(query, [user?.email], (err, res) => {
            if (err) {
                reject(err)
            }
            resolve(res)
        })
    })

}

exports.createUser = (user) => {
    const query = `Insert into users (name,email,password,status) values(?,?,?,?);`

    return new Promise((resolve, reject) => {
        database.db.run(query, [user?.name, user?.email, user?.password, user?.status ? 1 : 0], (err, res) => {
            if (err) {
                reject(err)
            }
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