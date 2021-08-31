const express = require("express");
const app = express();
const ejs = require('ejs');
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const generalRouters = require("./src/routers/general");

app.use(express.urlencoded({extended:true}));
app.use(expressLayouts);
app.set("view engine","ejs");
app.set("views",path.resolve(__dirname,"./src/views"));


app.use("/",generalRouters);
app.listen(5000,() =>{
    console.log("5000 runs");
});