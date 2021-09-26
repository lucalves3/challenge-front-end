import React from 'react';
import { Link } from 'react-router-dom';

export default class LoginArea extends React.Component {
  constructor() {
    super()

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);

    this.state= {
      emailArea: '',
      passwordArea: '',
    }
  }

  handleEmailChange(event) {
    this.setState({
      emailArea: event.target.value
    })
  }

  handlePasswordChange(event) {
    this.setState({
      passwordArea: event.target.value
    })
  }

  handleButtonClick() {
    const email = this.state.emailArea;
    const password = this.state.passwordArea;
    localStorage.setItem(
      'UserEmail', email,
      )
    localStorage.setItem(
      'UserPassword', password,
    )
  }

  render() {
    return(
      <form>
        <h1 className="h1-login-area">Comece a coletar pokémons!</h1>
        <input
        className="input-login-email"
        type="text"
        required="required"
        placeholder="Digite seu Email..."
        onChange={ this.handleEmailChange }
        />
        <input
        className="input-login-password"
        type="password"
        placeholder="Digite sua senha..."
        onChange={ this.handlePasswordChange }
        />
        <Link to="/pokemon-area">
          <button
          className="button-login" 
          type="submit"
          onClick={ this.handleButtonClick }
          >
            <p className="text-button">
              Entrar
            </p>
          </button>
        </Link>
      </form>
    )
  }
}
