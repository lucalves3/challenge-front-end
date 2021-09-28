import React from 'react';
import { getAllPokemons, getApiPokemon } from '../services/Api';

export default class MainPokes extends React.Component {
  constructor() {
    super()
    
    this.getFunction = this.getFunction.bind(this);
    this.getAllPokes = this.getAllPokes.bind(this);
    this.filterApiPoke = this.filterApiPoke.bind(this);

    this.state={
      pokeApi: [],
      allPokes: [],
      nameAllPokes: [],
    }
  }

  componentDidMount() {
    this.getFunction()
    this.getAllPokes()
  }

  async getAllPokes() {
    const arrayAllPokes = await getAllPokemons();
    this.setState({
      allPokes: [arrayAllPokes.results],
      nameAllPokes: [arrayAllPokes.results.map((poke) => (poke.name))],
    })
  }

  async getFunction() {
    const arrayNames = [];
    const arrayApi = [];
    const api = await getAllPokemons()
    for (let index = 0; index < 100; index+= 1) {
      arrayNames.push(api.results.map((poke) => (poke.name))[index])
      const vamo = await getApiPokemon(`${arrayNames[index]}`)
      arrayApi.push(vamo)
      this.setState({
        pokeApi: [arrayApi],
      })
    }
  }

  filterApiPoke(event) {
    const { pokeApi } = this.state
    if (event.target.value === 'fire') {
      const newArray = pokeApi.filter(() => pokeApi.map((pokemon) => pokemon).map((element) => element.map((element2) => element2.types.map((atributo) => atributo.type.name))) === 'grass')
      this.setState({
        pokeApi: newArray
      })
    }
  }

  componentWillUnmount() {
    this.getFunction()
  }

  render() {
    const { pokeApi } = this.state;
    
    return (
      <main className="section-mainPokes">
        <section>
          <button 
          className="button-vertodos"
          value="Todos"
          >
            Todos
          </button>
          <button 
          className="button-vertodos"
          value="fire"
          onClick={ this.filterApiPoke }
          >
            Fire
          </button>
          <button 
          className="button-vertodos"
          value="Eletric"
          >
            Eletric
          </button>
          <button 
          className="button-vertodos"
          value="Water"
          >
            Water
          </button>
        </section>
        {<section className="section-cards-api-pokemon">
          { pokeApi.map((element) => (element.map((pokemon) => (
            <section className="section-cards-pokemon" key={ pokemon.name } >
            <div className="div-poke-heart">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
              <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
            </svg>
            {<img className="pokemon-image" src={ pokemon.sprites.front_default } alt={ pokemon.name } />}
            </div>
            <p className="name-pokemon"> { pokemon.name } </p>
            <p> ID:{ pokemon.id }</p>
            <div className="div-elet-fire">
              { pokemon.types.map((name) => (<p key={ name.url } className={`tag-p-${name.type.name}`}>{ name.type.name }</p>)) }
              {/* <p className="tag-p-fire">Fire</p> */}
            </div>
            <button className="button-pokemons-details">Ver detalhes</button>
            </section>
          ))))}
        </section>}
        
      </main>
    )
  }
}