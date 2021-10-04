import React from 'react';
import { Link } from 'react-router-dom';
import pokemon from '../images/image 4.png'
import vector from '../images/Vector2.png'

export default class Header extends React.Component {
  render() {
    return (
      <header className="section-header">
        <img
        className="pokemon-logo-header"
        src={ pokemon }
        alt="pokemon logo"
        />
        <section className="links-header-section">
          <div>
            <h1 className="buttons-links-header-favoritos">
              <Link to="/favorite">
                Favoritos
              </Link>
            </h1>
          </div>
          <div>
            <h1 className="buttons-links-header-procurar">
              <Link to="/procurar">
                Procurar
              </Link>
            </h1>
          </div>
          <div>
            <h1 className="buttons-links-header-verTodos">
              <Link to="/vertodos">
                Ver todos
              </Link>
            </h1>
          </div>
        </section>
        <Link to="/">
          <button
          className="button-leave-header"
          >
            <p className="tag-p-leave">Sair</p>
            <img
            className="leave-vector"
            src={ vector }
            alt="sair"
            />
          </button>
        </Link>
      </header>
    )
  }
}