const asyncHandler = require("express-async-handler");
const newsletter = require("../models/newsletterModels");
require('dotenv').config();


const enternewsletter = asyncHandler(async (req, res) => {
    const { titlename, author, date, description, imageurl} = req.body;

    if (!titlename || author || !date || !description || !imageurl) {
        res.status(400);
        throw new Error("Please fill all fields");
    }

    // Create newsletter
    const news = await newsletter.create({
        titlename,
        author,
        date,
        description,
        imageurl
    });

});

module.exports = {enternewsletter};
