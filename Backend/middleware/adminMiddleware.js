const adminMiddleware = (req, res, next) => {

    // CHECK ADMIN
    if (req.user && req.user.isAdmin) {

        next();

    } else {

        return res.status(403).json({

            success: false,

            msg: "Admin Access Only"
        });
    }
};

module.exports = adminMiddleware;