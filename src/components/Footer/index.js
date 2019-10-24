import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Footer extends Component {
    render(){
        return(
            <div>
                <footer class="page-footer font-small blue">

                    <div class="footer-copyright text-center py-3">© 2019 Copyright Pokédex</div>

                </footer>
            </div>
        )
    }
}
