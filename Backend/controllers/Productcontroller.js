const Product = require("../models/productmodel");



// ================= ADD PRODUCT =================

const addProduct = async (req, res) => {

    try {

        const {

            name,

            price,

            image,

            category,

            description

        } = req.body;



        // CREATE PRODUCT
        const product = new Product({

            name,

            price,

            image,

            category,

            description
        });

        // SAVE PRODUCT
        await product.save();



        res.status(201).json({

            success: true,

            msg: "Product Added Successfully",

            product
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            msg: "Server Error"
        });
    }
};



// ================= GET PRODUCTS =================

const getProducts = async (req, res) => {

    try {

        const products = await Product.find();



        res.status(200).json({

            success: true,

            products
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            msg: "Server Error"
        });
    }
};



// ================= GET SINGLE PRODUCT =================

const getSingleProduct = async (req, res) => {

    try {

        const product = await Product.findById(

            req.params.id
        );



        res.status(200).json({

            success: true,

            product
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            msg: "Server Error"
        });
    }
};



// ================= UPDATE PRODUCT =================

const updateProduct = async (req, res) => {

    try {

        const {

            name,

            price,

            image,

            category,

            description

        } = req.body;



        const updatedProduct = await Product.findByIdAndUpdate(

            req.params.id,

            {
                name,

                price,

                image,

                category,

                description
            },

            {
                new: true
            }
        );



        res.status(200).json({

            success: true,

            msg: "Product Updated Successfully",

            updatedProduct
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            msg: "Server Error"
        });
    }
};



// ================= DELETE PRODUCT =================

const deleteProduct = async (req, res) => {

    try {

        await Product.findByIdAndDelete(

            req.params.id
        );



        res.status(200).json({

            success: true,

            msg: "Product Deleted Successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            msg: "Server Error"
        });
    }
};



// ================= EXPORT =================

module.exports = {

    addProduct,

    getProducts,

    getSingleProduct,

    updateProduct,

    deleteProduct
};