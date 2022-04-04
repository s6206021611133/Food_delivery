const express = require('express')
const authController = require('./../controllers/authController')

const router = express.Router()

router.post('/register', authController.registerUser)

router.post('/admin/register', authController.registerByadmin)

router.post('/login', authController.Login)

module.exports = router
