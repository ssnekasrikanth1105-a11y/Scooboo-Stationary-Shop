const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

    // TOKEN FROM COOKIE
    const token = req.cookies.token;

    // CHECK TOKEN
    if (!token) {

        return res.status(401).json({

            success: false,

            msg: "No Token Found"
        });
    }

    try {

        // VERIFY TOKEN
        const decoded = jwt.verify(

            token,

            process.env.JWT_SECRET
        );

        // SAVE USER
        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({

            success: false,

            msg: "Invalid Token"
        });
    }
};

module.exports = authMiddleware;