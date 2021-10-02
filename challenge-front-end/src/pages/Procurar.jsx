import React from 'react';
import Header from '../components/Header';
import { Input } from 'semantic-ui-react'
import { searchApiPokemon } from '../services/Api';
import LoaderExampleInlineCentered from '../components/Loading';

export default class Procurar extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.getPokemonSearch = this.getPokemonSearch.bind(this);
    this.chandleKeyDown = this.chandleKeyDown.bind(this);
    this.cardPokemons = this.cardPokemons.bind(this);

    this.state= {
      pokemon: '',
      returnApi: [],
    }
  }

  handleChange(event) {
    this.setState({
      pokemon: event.target.value,
    })
  }

  async getPokemonSearch() {
    const { pokemon } = this.state;
    const findPokemon = await searchApiPokemon(pokemon);
    if(typeof findPokemon === 'object'){
      this.setState({
        returnApi: findPokemon,
      })
      this.cardPokemons();
    }
  }

  chandleKeyDown(event) {
    if (event.key === 'Enter') {
      this.getPokemonSearch()
    }
  }

  cardPokemons() {
    const { returnApi } = this.state;
    return (<>
      <main className="main-search-pokemons">
        <section className="section-cards-api-pokemon">
          <section className="section-cards-pokemon" key={ returnApi.name } >
							<div className="div-poke-heart">
								<label> 
									<input 
										type="checkbox"
                    />
								</label>
								{<img className="pokemon-image" src={ returnApi.sprites.front_default } alt={ returnApi.name } />}
							</div>
							<p className="name-pokemon"> { returnApi.name } </p>
							<p> ID:{ returnApi.id }</p>
							<div className="div-elet-fire">
								{ returnApi.types.map((name) => (<p key={ name.url } className={`tag-p-${name.type.name}`}>{ name.type.name }</p>)) }
								{/* <p className="tag-p-fire">Fire</p> */}
							</div>
							<div className="div-button-details">
							<button className="button-pokemons-details">Ver detalhes</button>
              </div>
						</section>
				</section>
      </main>  
    </>)
  }


  render() {
    const { returnApi } = this.state;
    const number = 0;
    return (
      <section className="section-search">
        <Header />
        <main>
          <section className="search-page-input">
            <Input
            className="input-search"
            icon='search'
            placeholder='Procure por pokémons'
            onChange={this.handleChange}
            onKeyDown={this.chandleKeyDown}
            />
          </section>
          <section>
          {returnApi.length === number ? LoaderExampleInlineCentered() : this.cardPokemons()}
          </section>
        </main>
      </section>
    )
  }
}
