const express = require("express");

const Router = express.Router();

const Productcontroller = require("../controllers/Productcontroller");

const authMiddleware = require("../middleware/authmiddleware");

const adminMiddleware = require("../middleware/adminMiddleware");



// ================= ADD PRODUCT =================

Router.post(

    "/addproduct",

    authMiddleware,

    adminMiddleware,

    Productcontroller.addProduct
);



// ================= GET ALL PRODUCTS =================

Router.get(

    "/getproducts",

    Productcontroller.getProducts
);



// ================= GET SINGLE PRODUCT =================

Router.get(

    "/getsingleproduct/:id",

    Productcontroller.getSingleProduct
);



// ================= UPDATE PRODUCT =================

Router.put(

    "/updateproduct/:id",

    authMiddleware,

    adminMiddleware,

    Productcontroller.updateProduct
);



// ================= DELETE PRODUCT =================

Router.delete(

    "/deleteproduct/:id",

    authMiddleware,

    adminMiddleware,

    Productcontroller.deleteProduct
);

module.exports = Router;