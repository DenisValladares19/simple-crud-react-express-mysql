const mysql  = require("mysql");

const mysqlConnection =  mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ejemplo"
});

mysqlConnection.connect((err)=>{
    if(err){
        console.log("error "+err);
    }else{
        console.log("DB conectada");
    }
})

module.exports = mysqlConnection;