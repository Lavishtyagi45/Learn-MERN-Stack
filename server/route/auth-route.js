const express = require("express");
const app = express();
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const validate=require("../middlewares/validate-middleware");
const signupSchema=require("../validators/auth-signup-validator");
const loginSchema=require("../validators/auth-login-validator");

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema),authcontrollers.register);
router.route("/login").post(validate(loginSchema),authcontrollers.login);

module.exports = router;