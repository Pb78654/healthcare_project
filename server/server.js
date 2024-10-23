const express= require("express");
const connectDb= require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
const cors= require ("cors");
const path = require("path");
// env file config
const dotenv = require("dotenv");
dotenv.config();

connectDb();
const app = express();
const port= process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

//Error handling
app.use(errorHandler);


//Routes below
app.get("/",(req,res)=>{
    res.send("working")
});

app.set('view engine' , 'hbs');
var hbs = require('hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));
app.get("/home",(req,res)=>{
    res.render("home",{
        users: [
            { username: "P", date: "23-10-2024", subject: "Maths" },
            { username: "Aa", date: "23-10-2024", subject: "Science" },
            { username: "I", date: "23-10-2024", subject: "History" }
        ]
    })
})


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});