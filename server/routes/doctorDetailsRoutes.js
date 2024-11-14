const express = require("express");
const router = express.Router();
const { registerDoctor } = require("../controllers/doctorDetailsController");
var {jwtAuthMiddleware} = require("../middlewares/jwtAuthMiddleware");
//Doctor registration route
router.post("/register",jwtAuthMiddleware, registerDoctor);

// router.post('/register', jwtAuthMiddleware.validateJwtToken, (req, res) => {

//     // Handle login logic here
  
//   });
module.exports = router;

