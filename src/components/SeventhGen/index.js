import React, { Component } from 'react'
import axios from "axios";
import PokemonCard from "../PokemonCard";

export default class FirstGen extends Component {
    state = {
        url: "https://pokeapi.co/api/v2/pokemon/?offset=721;limit=88",
        pokemon: null
    }

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({pokemon: res.data['results']})

        console.log(this.state.url)
    }

    render(){
        return(
            <React.Fragment>
                {this.state.pokemon ? (
                    <div className="row">
                        {this.state.pokemon.map(pokemon =>
                            <PokemonCard
                                key={pokemon.name}
                                name={pokemon.name}
                                url={pokemon.url}
                            />
                        )}
                    </div>
                ) : (<h1>Loading Data...</h1>)
                }
            </React.Fragment>

        )
    }
}