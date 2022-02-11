const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController')
const { authValidationRules, validate } = require('../validations/validator')


router.post("/register", authValidationRules(), validate, authController.register);

module.exports = router;
