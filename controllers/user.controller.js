
const Service = require("../services")

exports.registration = async (req, res) => {
    try {
        const result = await Service.user.createCustomer(req, res)
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

