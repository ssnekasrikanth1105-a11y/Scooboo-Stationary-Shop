const User = require("../models/usermodel");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");



// ================= REGISTER =================

const registeruser = async (req, res) => {

    const { name, email, password, isAdmin } = req.body;

    try {

        // CHECK EMPTY
        if (!name || !email || !password) {

            return res.status(400).json({

                success: false,

                msg: "Please Fill All Fields"
            });
        }

        // CHECK USER
        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({

                success: false,

                msg: "User Already Exists"
            });
        }

        // HASH PASSWORD
        const hashedPassword = await bcrypt.hash(

            password,

            10
        );

        // CREATE USER
        const userdata = new User({

            name,

            email,

            password: hashedPassword,

            isAdmin: isAdmin || false
        });

        await userdata.save();

        res.status(201).json({

            success: true,

            msg: "User Created",

            user: userdata
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            msg: "Server Error"
        });
    }
};



// ================= LOGIN =================

const login = async (req, res) => {

    const { email, password } = req.body;

    try {

        // CHECK EMPTY
        if (!email || !password) {

            return res.status(400).json({

                success: false,

                msg: "Please Fill All Fields"
            });
        }

        // FIND USER
        const data = await User.findOne({ email });

        if (!data) {

            return res.status(404).json({

                success: false,

                msg: "User Not Found"
            });
        }

        // CHECK PASSWORD
        const matchPassword = await bcrypt.compare(

            password,

            data.password
        );

        if (!matchPassword) {

            return res.status(400).json({

                success: false,

                msg: "Invalid Password"
            });
        }

        // CREATE TOKEN
        const token = jwt.sign(

            {
                id: data._id,

                email: data.email,

                isAdmin: data.isAdmin
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1h"
            }
        );



        // SAVE COOKIE
        res.cookie("token", token, {

            httpOnly: true,

            secure: false,

            sameSite: "lax",

            maxAge: 60 * 60 * 1000
        });



        res.status(200).json({

            success: true,

            msg: "Login Success",

            token,

            user: data
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            msg: "Server Error"
        });
    }
};



// ================= LOGOUT =================

const logout = async (req, res) => {

    res.clearCookie("token");

    res.status(200).json({

        success: true,

        msg: "Logout Success"
    });
};

module.exports = {

    registeruser,

    login,

    logout
};