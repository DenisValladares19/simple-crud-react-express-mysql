import React, { Component } from "react";
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import Navigation from "./components/navigation";
import Empleado from "./components/empleado";
import Departamento from "./components/departamento";
import Dashboard from "./components/dashboard";

class App extends Component {
    render(){
        return (                
            <BrowserRouter>
                <Navigation/> 
                <Switch>
                    <Route path="/empleado" component={Empleado} exact/> 
                    <Route path="/departamento" component={Departamento} exact/>
                    <Route path="/" component={Dashboard} exact />
                </Switch>   
            </BrowserRouter>
        );
    }
}

export default App;