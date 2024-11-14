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

    if (news) { 
        res.status(201).json({
            titlename: news.titlename,
            author: news.author,
            date: news.date,
            description: news.description,
            imageurl: news.imageurl
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

module.exports = {enternewsletter};
