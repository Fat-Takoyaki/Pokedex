import React, { Component } from 'react'
//import PokemonList_old from "../pokemon/PokemonList";
import SecondGen from "../../components/SecondGen";

export default class FirstGenView extends Component {
    render(){
        return(
            <div className="row">
                <div className="col">
                    <SecondGen/>
                </div>
            </div>
        )
    }
}
