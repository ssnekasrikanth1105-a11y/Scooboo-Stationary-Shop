const express = require("express");

const Router = express.Router();

const usercontroller = require("../controllers/usercontroller");



// REGISTER
Router.post(

    "/createuser",

    usercontroller.registeruser
);



// LOGIN
Router.post(

    "/login",

    usercontroller.login
);



// LOGOUT
Router.get(

    "/logout",

    usercontroller.logout
);

module.exports = Router;