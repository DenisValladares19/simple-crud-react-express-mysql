import React, { Component } from 'react'

class Table extends Component{
    constructor(props){
        super(props)
    }

    onClick(e){
        const id = e.target.id;
        fetch("/api/v1/empleado/"+id,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            mode:"cors"
        })
        .then(res=>res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
        this.props.updateEmpleado();
    }

    render(){
        return (
            <div className="table-responsive">
                <table className="table-striped table" width="100%">
                    <thead className="thead-dark text-center">
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Telefono</th>
                        <th>Departamento</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        {
                            this.props.empleados.map(emp=><tr key={emp.idEmpleado}>
                                <td>{emp.nombre}</td>
                                <td>{emp.apellido}</td>
                                <td>{emp.telefono}</td>
                                <td>{emp.dep}</td>
                                <td><center><button 
                                        className="btn btn-outline-danger" id={emp.idEmpleado}
                                        onClick={this.onClick.bind(this)}
                                    >Eliminar</button></center></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;