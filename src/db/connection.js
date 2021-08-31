const mysql = require("mysql");


const connection = mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"",
    dateStrings: true,
    database:"nodejs_crud",

});

connection.connect(error =>{
    if(error) throw error;

    console.log("Success Database Connection");
});

module.exports = connection;