import React, {  Component } from "react";

class Departamento extends Component{
    constructor(props){
        super(props);
        this.state = {
            departamentos : [],
            nombre: "",
            uri : "/api/v1/departamento/"
        }
    }

    getDepartamentos(){
        fetch(this.state.uri)
        .then(function(response){
            return response.json();
        }).then((data)=>{
            this.setState({
                departamentos:data
            });
        })
        .catch((err)=>console.log(err))
    }

    componentDidMount(){
        this.getDepartamentos()
    }

    
    onChange(e){
        this.setState({
            nombre:e.target.value
        })
    }

    onSubmit (e){
        e.preventDefault();
        fetch(this.state.uri,{
            method:"POST",
            body: JSON.stringify({nombre: this.state.nombre}),
            headers:{
                "Content-Type":"application/json"
            },
            mode:"cors"
        }).then(res => res.json())
        .then(res =>{
            console.log(res);
        })
        .catch(err => console.log(err));
        this.getDepartamentos();
        this.setState({nombre:''});
    }

    delete(e){
        let id = e.target.id;
        fetch(this.state.uri+id,{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json"
            },
            mode:"cors"
        }).then(res=>res.json())
        .then(res=>{
            console.log(res);
        }).catch(err => console.log(err))
        this.getDepartamentos();
    }

    

    render(){
        return (
            <div className="container mt-3">
               <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="text-center">Departamento</h5>
                            </div>
                            <div className="card-body">
                                <form id="frmDepartamento" onSubmit={this.onSubmit.bind(this)}>
                                    <div className="form-group">
                                        <input type="text" id="nombre" placeholder="Nombre" className="form-control" value={this.state.nombre} name="nombre" onChange={this.onChange.bind(this)}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Guardar" className="btn btn-block btn-outline-dark" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header text-center">
                                <h5>Listado</h5>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {this.state.departamentos.map(dep=><li key={dep.idDepartamento} 
                                    id={dep.idDepartamento} 
                                    onDoubleClick={this.delete.bind(this)}
                                    className="list-group-item">
                                        {dep.nombre}
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}

export default Departamento;