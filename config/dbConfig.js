// const mysql  = require("mysql")

// class Database {
//     constructor(){
//         if(!Database.instance){
//             this.pool = mysql.createPool({
//                 connectionLimit:process.env.DB_CONNECTIONS_LENGTH,
//                 host:process.env.DB_HOST,
//                 user:process.env.DB_USER,
//                 password:process.env.DB_PASSWORD,
//                 database:process.env.DB_NAME
//             })
//             Database.instance = this;
//         }
//         return Database.instance
//     }
// }

// const database = new Database ()
// module.exports = database

const sqlite = require('sqlite3').verbose()
const path = require("path")

class Database {
    constructor(){
        if(!Database.instance){
            this.db =new sqlite.Database(path.join(__dirname,"../db/task.db"), (err) => {
                if (err) {
                  console.error(err.message);
                  return
                }
                console.log('Connected to the  database.');
              })
            Database.instance = this;
        }
        return Database.instance
    }
}

const database = new Database ()
module.exports = database