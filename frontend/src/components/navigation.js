import React, { Component } from "react";
import { Router, Route, Switch, Link } from "react-router-dom";
class Navigation extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand h3" to="/">SIMPLE CRUD</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/departamento">Departamento <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/empleado">Empleado</Link>
                        </li>
                        </ul>   
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;

