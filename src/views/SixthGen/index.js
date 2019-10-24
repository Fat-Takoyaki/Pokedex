import React, { Component } from 'react'
//import PokemonList_old from "../pokemon/PokemonList";
import SixthGen from "../../components/SixthGen";

export default class SixthGenView extends Component {
    render(){
        return(
            <div className="row">
                <div className="col">
                    <SixthGen/>
                </div>
            </div>
        )
    }
}
