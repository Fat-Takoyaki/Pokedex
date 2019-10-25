import React, { Component } from 'react'
import styled from "styled-components";
import spinner from "../../assets/loader.gif"
import {Link} from "react-router-dom";



// ` = alt + 0096

const Sprite = styled.img`
    width: 7em;
    height: 7em;
    display: none;
`;

const Card = styled.div`
    background-color: #00000005;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-user-select: none;
`;

const StyleLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover,
    &:focus,
    &:visited,
    &:link,
    &:active{
        text-decoration: none;
    }

`;

export default class PokemonCard extends Component {

    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        toManyRequests: false
    };

    componentDidMount() {
        const {name, url} = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

        this.setState({name, imageUrl, pokemonIndex})
    }

    render(){
        const {name, pokemonIndex, imageUrl} = this.state;

        return(
            <div className="col-md-3 col-sm-6 mb-5">
                <StyleLink to={`/${pokemonIndex}`}>
                    <Card className="card">
                        <div className="card-header">
                            <h5>{pokemonIndex}</h5>

                                {this.state.imageLoading ? (
                                    <img src={spinner}
                                         style={{width: '3em', height: '3em'}}
                                         className="card-img-top rounded mx-auto d-block mt-2"
                                    />
                                ) : null}

                                <Sprite className="card-img-top rounded mx-auto mt-2"
                                        onLoad={() => this.setState({imageLoading: false})}
                                        onError={() => this.setState({toManyRequests: true})}
                                        src={imageUrl}
                                        style={
                                            this.state.toManyRequests
                                                ? {display: "none"}
                                                : this.state.imageLoading
                                                ? null
                                                : {display: "block"}
                                        }
                                />

                                    {this.state.toManyRequests ? (
                                        <h6 className="mx-auto d-block mt-2">
                                            <span className="badge badge-danger mx-auto d-block mt-2">Too Many Requests</span>
                                        </h6>
                                    ): null}

                            <div className="card-body mx-auto">
                                <h6 className="card-title">
                                    {
                                        name.toLocaleLowerCase().split(' ').map(
                                            letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                                        ).join(' ')
                                    }
                                </h6>
                            </div>

                        </div>
                    </Card>
                </StyleLink>
            </div>
        )
    }
}
