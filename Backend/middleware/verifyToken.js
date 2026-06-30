const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {

    try {

        const token = req.cookies.token;

        if (!token) {

            return res.status(401).json({

                success: false,
                msg: "Token Missing"
            });
        }

        const decoded = jwt.verify(

            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({

            success: false,
            msg: "Unauthorized"
        });
    }
};

module.exports = verifyToken;