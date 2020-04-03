import React, { Component } from 'react';

class Formulario extends Component {
    constructor(props){
        super(props);
        this.state = {
            departamentos:[],
            nombre:'',
            apellido:'',
            telefono:'',
            idDepartamento:'',
            uri: '/api/v1/empleado'
        }
    }

    getDepartamentos(){
        fetch('/api/v1/departamento')
        .then(function(response){
            return response.json()
        })
        .then((data)=>{
            this.setState({
                departamentos:data
            });
        })
        .catch(function(err){
            console.log(err)
        })
    }

    componentDidMount(){
        this.getDepartamentos()
    }

    onChange(e){
        this.setState({
            [e.target.name] :  e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        fetch(this.state.uri,{
            method:"POST",
            body: JSON.stringify({
                nombre: this.state.nombre,
                apellido: this.state.apellido,
                telefono: this.state.telefono,
                idDepartamento: this.state.idDepartamento
            }),
            headers:{
                "content-Type":"application/json"
            },
            mode:"cors"
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            this.setState({
                nombre:"",
                apellido:"",
                telefono:"",
                idDepartamento:""
            });
            this.props.updateEmpleado();
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div className="card">
                <div className="card-header text-center">
                    <h5>Empleado</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="nombre" 
                            className="form-control" 
                            placeholder="Nombre"  
                            onChange={this.onChange.bind(this)}  
                            value={this.state.nombre}
                            required="true"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="apellido" 
                            className="form-control" 
                            placeholder="Apellido"
                            onChange={this.onChange.bind(this)}   
                            value={this.state.apellido}  
                            required="true"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="telefono" 
                            className="form-control" 
                            placeholder="0000-0000"
                            onChange={this.onChange.bind(this)}   
                            value={this.state.telefono}
                            required="true"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dep">Departamento</label>
                        <select 
                            name="idDepartamento" 
                            id="dep"
                            className="form-control"
                            onChange={this.onChange.bind(this)}
                            value={this.state.idDepartamento}
                        >
                            {
                                this.state.departamentos.map(dep=>
                                    <option 
                                        key={dep.idDepartamento} 
                                        value={dep.idDepartamento}
                                    >
                                        {dep.nombre}
                                    </option>
                                )
                            }    
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Guardar" className="btn btn-outline-dark btn-block"/>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default Formulario;