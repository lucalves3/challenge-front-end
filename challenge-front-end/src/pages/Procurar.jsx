import React from 'react';
import Header from '../components/Header';
import { Input } from 'semantic-ui-react'
import { searchApiPokemon } from '../services/Api';
import LoaderExampleInlineCentered from '../components/Loading';
import { Rating, Icon } from 'semantic-ui-react'

export default class Procurar extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);
    this.getPokemonSearch = this.getPokemonSearch.bind(this);
    this.chandleKeyDown = this.chandleKeyDown.bind(this);
    this.cardPokemons = this.cardPokemons.bind(this);
    this.moreDetails = this.moreDetails.bind(this);
    this.checkMoreDetails = this.checkMoreDetails.bind(this);

    this.state= {
      pokemon: '',
      returnApi: [],
      MoreDetailsStatus: false,
      pokeStats: [],
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

  checkMoreDetails() {
    const { MoreDetailsStatus } = this.state;
    if(MoreDetailsStatus === false) {
      this.setState({
        MoreDetailsStatus: true,
      })
    } else {
      this.setState({
        MoreDetailsStatus: false,
      })
    }
  }

  

  moreDetails() {
    const { returnApi } = this.state;
    returnApi.stats.map((elemento) => console.log(elemento));
    return (
      <section className="section-details-poke">
        <div className="details-div-poke">
          <h2>Detalhes</h2>
          <Icon link name='close' size="big" onClick={this.checkMoreDetails} />
        </div>
          <hr></hr>
        <div>
          <p className="name-pokemon"> { returnApi.name } </p>
          <div>
          {<img className="pokemon-image" src={ returnApi.sprites.front_default } alt={ returnApi.name } />}
          {<img className="pokemon-image" src={ returnApi.sprites.back_default } alt={ returnApi.name } />}
          </div>
          <div>
            <h2><span>{returnApi.order}m</span></h2>
            <h2><span>{returnApi.weight}Kg</span></h2>
            { returnApi.types.map((name) => (<p key={ name.url } className={`tag-p-${name.type.name}`}>{ name.type.name }</p>)) }
          </div>
          <div>
            <h1>Estatísticas</h1>
              <section>
              <div>
              { returnApi.stats.map((element) => (
                (<div key={element}>
                  <div className="div-status-all" >
                    <div>
                      <p>{element.stat.name}</p>
                    </div>
                    <div className="status-bar">
                      <p className="status-bar-p" style={{width: `${element. base_stat}%`}}></p>
                    </div>
                    <div>
                      <p className="tag-p-basestat">{element.base_stat}</p>
                    </div>
                  </div>
                  </div>)
              ) )}
              </div>
              <p></p>
            </section>
          </div>
        </div>
      </section>
    )
  }

  cardPokemons() {
    const RatingExampleRating = () => (
      <Rating icon='heart' defaultRating={0} size="massive" />
    )
    const { returnApi } = this.state;
    const details = this.state.MoreDetailsStatus;
    return (<>
      <main className="main-search-pokemons">
        <section className="section-cards-api-pokemon">
          <section className="section-cards-pokemon" key={ returnApi.name } >
							<div className="div-poke-heart">
								<label> 
                  {RatingExampleRating()}
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
							<button
              className="button-pokemons-details"
              onClick={this.checkMoreDetails}
              >
                Ver detalhes
              </button>
              </div>
						</section>
              {details === true ? this.moreDetails() : ''}
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
