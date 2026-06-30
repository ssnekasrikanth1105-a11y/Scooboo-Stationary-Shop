const Contact = require("../models/contactModel");

const createContact = async (req, res) => {

  const { name, email, message } = req.body;
  console.log(name,email,message);
  

  try {

    if (!name || !email || !message) {

      return res.status(400).json({
        success: false,
        msg: "Please Fill All Fields"
      });
    }

    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();
    console.log(newContact);
    

    res.status(201).json({
      success: true,
      msg: "Message Sent Successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      msg: "Server Error"
    });
  }
};

module.exports = {
  createContact
};