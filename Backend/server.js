const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();



// ================= DATABASE =================

mongoose.connect(process.env.MONGO_URL)

.then(() => {

    console.log("MongoDB Connected");
})

.catch((error) => {

    console.log(error);
});



// ================= MIDDLEWARE =================

app.use(express.json());

app.use(cookieParser());

app.use(

    cors({

        origin: "http://localhost:5173",

        credentials: true
    })
);

const productrouter = require("./routes/productrouter");

app.use("/api/product", productrouter);

// ================= ROUTES =================

const userroutes = require("./routes/userroutes");

app.use("/api/user", userroutes);

// ===========contact routes===========

const contactRoute = require("./routes/contactrouter");

app.use("/api/contact", contactRoute);


// ================= AUTH MIDDLEWARE =================

const authMiddleware = require("./middleware/authmiddleware");

const adminMiddleware = require("./middleware/adminMiddleware");



// ================= PROTECTED ROUTE =================

app.get(

    "/api/profile",

    authMiddleware,

    (req, res) => {

        res.status(200).json({

            success: true,

            user: req.user
        });
    }
);



// ================= ADMIN ROUTE =================

app.get(

    "/api/admin/dashboard",

    authMiddleware,

    adminMiddleware,

    (req, res) => {

        res.status(200).json({

            success: true,

            msg: "Welcome Admin",

            admin: req.user
        });
    }
);



// ================= SERVER =================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server Running On Port {PORT}`);
});