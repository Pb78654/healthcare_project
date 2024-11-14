const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");
var {jwtAuthMiddleware} = require("../middlewares/jwtAuthMiddleware");
// import {jwtAuthMiddleware} from "../middlewares/jwtAuthMiddleware";
// User registration route
router.post("/register", registerUser);

// User login route
router.post("/login",jwtAuthMiddleware ,loginUser);

// router.post('/login',jwtAuthMiddleware ,function(req, res){
//     console.log("hogya");
//   });
// router.post('/login', jwtAuthMiddleware.validateJwtToken, (req, res) => {

//     // Handle login logic  here
  
//   });
module.exports = router;
