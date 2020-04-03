const express = require("express");
const mysqlConnection = require("../database");
const router = express.Router();

router.get("/",(req, res)=>{
    mysqlConnection.query("SELECT * FROM departamento", (err, rows, fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err)
        }
    })
});

router.post("/", (req, res)=>{
    const {nombre} = req.body;
    mysqlConnection.query("INSERT INTO departamento VALUES(?,?)",[0, nombre],(err, rows, fields)=>{
        if(!err){
            res.json({
                status:"Se guardo exitosamente!"
            })
        }else{
            console.log("Error "+err)
        }
    })
});

router.put("/:id", (req, res)=>{
    const {nombre} = req.body;
    const {id} = req.params;
    mysqlConnection.query("UPDATE departamento SET nombre=? WHERE idDepartamento=?",[nombre,id], (err, rows, fields)=>{
        if(!err){
            res.json({
                status:"Se modifico exitosamente!"
            })
        }else{
            console.log("error "+err)
        }
    })
});

router.delete("/:id", (req, res)=>{
    const {id} = req.params;
    mysqlConnection.query("DELETE FROM departamento WHERE idDepartamento=?",[id], (err, rows, fields)=>{
        if(!err){
            res.json({
                status:"Se elimino exitosamente!"
            })
        }else{
            console.log("error "+err)
        }
    })
})

module.exports = router;