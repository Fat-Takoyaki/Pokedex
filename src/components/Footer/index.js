import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Footer extends Component {
    render(){
        return(
            <div>
                <footer className="page-footer font-small blue">

                    <div className="footer-copyright text-center py-3">© 2019 Copyright Pokédex</div>

                </footer>
            </div>
        )
    }
}
