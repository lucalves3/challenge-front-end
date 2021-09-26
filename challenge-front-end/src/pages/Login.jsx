import React from 'react';
import LoginArea from '../components/LoginArea';
import images from '../images/logopokemons-color.png'
import screenPokemon from '../images/light-pokemons.png'

export default class Login extends React.Component {
  render() {
    return (
      <section className="section-login">
        <img
        className="image-logo-pokemon"
        src={ images }
        alt="Pokemon Logo" />
        <LoginArea />
        <img
        className="screen-pokemons"
        src={ screenPokemon }
        alt="pokemons"
        />
      </section>
    )
  }
}