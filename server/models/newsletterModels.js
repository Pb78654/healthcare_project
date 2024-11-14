const mongoose = require("mongoose");
const NewsletterSchema = mongoose.Schema({
    titlename:{
        type:String,
        required:[true , 'Please enter the title'],
    },
    author:{
        type:String,
        required:[true , 'Please enter the name of author'],
    },
    date:{
        type:Date,
        required:[true , 'Please enter the date'],
    },
    description:{
        type:String,
        required:[true , 'Please enter the description'],
    },
    imageurl:{
        type:String,
        required:[true , 'Please enter the image url'],
    },
});

module.exports = mongoose.model("Newsetter", NewsletterSchema);
