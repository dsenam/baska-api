const User = require('../models/User')
const { body, validationResult } = require('express-validator');



const register = async (req, res) => {
   const {name, email, password, confirmPassword} = req.body

   console.log(name)

   return res.send('Cheguei até aqui')
  };

  module.exports = {
    register
  };