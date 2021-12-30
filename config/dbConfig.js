const mysql  = require("mysql")

class Database {
    constructor(){
        if(!Database.instance){
            this.pool = mysql.createPool({
                connectionLimit:process.env.DB_CONNECTIONS_LENGTH,
                host:process.env.DB_HOST,
                user:process.env.DB_USER,
                password:process.env.DB_PASSWORD,
                database:process.env.DB_NAME
            })
            Database.instance = this;
        }
        return Database.instance
    }
}

const database = new Database ()
module.exports = database