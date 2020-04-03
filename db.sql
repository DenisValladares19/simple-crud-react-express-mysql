CREATE DATABASE ejemplo;
USE ejemplo;

CREATE TABLE departamento(
    idDepartamento int primary key auto_increment,
    nombre varchar(50) not null
);

CREATE TABLE empleado(
    idEmpleado int primary key auto_increment,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    telefono varchar(15) not null,
    idDepartamento int not null,
    foreign key(idDepartamento)
    references departamento(idDepartamento)
);

INSERT INTO departamento VALUE(1, "RRHH");
INSERT INTO departamento VALUE(2, "FINANZAS");
INSERT INTO departamento VALUE(3, "INFORMATICA");

INSERT INTO empleado VALUE(1, "Denis","valladares","1234-5678",3);