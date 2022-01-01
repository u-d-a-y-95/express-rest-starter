
const Service = require("../services")

exports.login = async (req, res) => {
    try {
        const result = await Service.user.loginUser(req, res)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }

}

exports.registration = async (req, res) => {
    try {
        const result = await Service.user.createUser(req, res)
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json(error)
    }

}

exports.getAllUser = async (req, res) => {
    try {
        const result = await Service.user.getUsers(req, res)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }

}

