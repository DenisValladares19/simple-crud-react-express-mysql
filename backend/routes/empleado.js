const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');


router.get('/', (req, res) => {
    mysqlConnection.query('SELECT e.*, d.nombre AS dep FROM empleado e JOIN departamento d ON e.idDepartamento=d.idDepartamento',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query("SELECT e.*, d.nombre AS dep FROM empleado e JOIN departamento d ON e.idDepartamento=d.idDepartamento WHERE idEmpleado=?", [id], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.post('/', (req, res) => {
    const {nombre, apellido, telefono, idDepartamento} = req.body;
    mysqlConnection.query("INSERT INTO empleado VALUES(?,?,?,?,?)",[0,nombre,apellido,telefono,idDepartamento], (err, rows, fields) => {
        if(!err){
            res.json({status: "Se ha guardado exitosamente"});
        }else{
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const { nombre, apellido, telefono, idDepartamento } = req.body;
    const { id } = req.params;
    mysqlConnection.query("UPDATE empleado SET nombre=?, apellido=?, telefono=?, idDepartamento=? WHERE idEmpleado=?",[nombre,apellido,telefono,idDepartamento,id], (err, rows,fields) => {
        if(!err){
            res.json({estatus:"Se modifico exitosamente"});
        }else{
            console.log(err);
        }
    })
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    mysqlConnection.query("DELETE FROM empleado WHERE idEmpleado=?", [id], (err, rows, fields) => {
        if(!err){
            res.json({estatus:"Se elimino exitosamente"});
        }
    })
})



module.exports = router;