const Models = require("../models")
const Utilies = require("../utilities")
const DAO = require("../dao");


exports.loginUser = async (req, res) => {
    const { body } = req;
    try {
        const result = await DAO.user.getUserByEmail(body)
        if (result?.length > 0) {
            const isPassWordValid = await Utilies.hash.compareHash(body?.password, result[0].password);
            if (isPassWordValid) {
                const payload = {
                    name: result[0].name,
                    email: result[0].email,
                    status: result[0].status,
                    id: result[0].id
                }
                const token = await Utilies.jwt.getToken(payload)
                return {
                    ...payload,
                    token
                }

            } else {
                throw ({
                    type: 401,
                    message: "unauthorized"
                })
            }

        } else {
            throw ({
                status: 401,
                message: "unauthorized"
            })
        }
    } catch (error) {
        console.log(error)
        throw (error)
    }

}


exports.createUser = async (req, res) => {
    const { body } = req;
    try {

        hashpassword = await Utilies.hash.getHash(body.password)
        const newUser = new Models.user(body.name, body.email, hashpassword)
        return await DAO.user.createUser(newUser)
    } catch (error) {
        throw (error)
    }

}

exports.getUsers = async (req, res) => {
    try {
        const result = await DAO.user.getUser()
        return result.map(item => ({
            id: item?.id,
            name: item?.name,
            email: item?.email,
            status: item?.status ? true : false
        }));
    } catch (error) {
        throw (error)
    }

}