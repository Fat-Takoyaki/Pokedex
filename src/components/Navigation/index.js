import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Navigation extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                    <Link to={`/`} className="navbar-brand col-sm-3 col-md-2 mr-0">Pokédex</Link>
                    <Link to={`/first-gen`} className="nav-link">First Gen</Link>
                    <Link to={`/second-gen`} className="nav-link">Second Gen</Link>
                    <Link to={`/third-gen`} className="nav-link">Third Gen</Link>
                    <Link to={`/fourth-gen`} className="nav-link">Fourth Gen</Link>
                    <Link to={`/fifth-gen`} className="nav-link">Fifth Gen</Link>
                    <Link to={`/sixth-gen`} className="nav-link">Sixth Gen</Link>
                    <Link to={`/seventh-gen`} className="nav-link">Seventh Gen</Link>
                </nav>
            </div>
        )
    }
}
