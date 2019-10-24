import React, { Component } from 'react'
//import PokemonList_old from "../pokemon/PokemonList";
import ThirdGen from "../../components/ThirdGen";

export default class ThirdGenView extends Component {
    render(){
        return(
            <div className="row">
                <div className="col">
                    <ThirdGen/>
                </div>
            </div>
        )
    }
}
