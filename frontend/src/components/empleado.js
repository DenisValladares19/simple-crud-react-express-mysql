import React, {Component} from 'react';
import Formulario  from './empleado.form';
import Table from './empleado.table';

class Empleado extends Component{
    constructor(props){
        super(props);
        this.state= {
            empleados:[],
            uri: '/api/v1/empleado'
        }
    }

    getEmpleados(){
        fetch(this.state.uri)
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                empleados:data
            })
        })
        .catch(err=>console.log(err))
    }

    componentDidMount(){
        this.getEmpleados();
    }


    render(){
        return(
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <Formulario updateEmpleado={this.getEmpleados.bind(this)} />
                    </div>
                    <div className="col-md-8">
                        <Table 
                            empleados={this.state.empleados} 
                            updateEmpleado={this.getEmpleados.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Empleado;