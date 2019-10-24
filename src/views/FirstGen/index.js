import React, { Component } from 'react'
//import PokemonList_old from "../pokemon/PokemonList";
import FirstGen from "../../components/FirstGen";

export default class FirstGenView extends Component {
    render(){
        return(
            <div className="row">
                <div className="col">
                    <FirstGen/>
                </div>
            </div>
        )
    }
}
