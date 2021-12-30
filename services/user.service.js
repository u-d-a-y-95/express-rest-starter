const Models = require("../models")
const Utilies = require("../utilities")
const DAO = require("../dao");


exports.createCustomer = async (req, res) => {
    const { body } = req;
    try {

        hashpassword = await Utilies.hash.getHash(body.password)
        const newUser = new Models.user(body.name, body.email, hashpassword)
        return await DAO.user.createUser(newUser)
    } catch (error) {
        throw(error)
    }

}

exports.getUsers = async (req, res) => {
    try {
        const result = await DAO.user.getUser()
        return result.map(item=>({
            id:item?.id,
            name:item?.name,
            email:item?.email,
            status:item?.status ? true : false
        }));
    } catch (error) {
        throw(error)
    }

}