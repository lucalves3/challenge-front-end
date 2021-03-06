import React from 'react';
import { getAllPokemons, getApiPokemon, searchApiPokemonById } from '../services/Api';
import PropTypes from 'prop-types';

export default class FavMainPokes extends React.Component {
	constructor() {
		super();
    
		this.getFunction = this.getFunction.bind(this);
		this.getAllPokes = this.getAllPokes.bind(this);
		this.filterApiPoke = this.filterApiPoke.bind(this);

		this.state={
			pokeApi: [],
			allPokes: [],
			nameAllPokes: [],
		};
	}

	componentDidMount() {
		this.getFunction();
		this.getAllPokes();
	}

	async getAllPokes() {
		const arrayAllPokes = await getAllPokemons();
		this.setState({
			allPokes: [arrayAllPokes.results],
			nameAllPokes: [arrayAllPokes.results.map((poke) => (poke.name))],
		});
	}

	async getFunction() {
		const arrayNames = [];
		const arrayApi = [];
		const api = await searchApiPokemonById();
		const { favorited } = this.props;
		this.setState({
			pokeApi: favorited,
		})
		for (let index = 0; index < 20; index+= 1) {
			arrayNames.push(api.results.map((poke) => (poke.name))[index]);
			const vamo = await getApiPokemon(`${arrayNames[index]}`);
			arrayApi.push(vamo);
			this.setState({
				pokeApi: [arrayApi],
			});
		}
	}

	filterApiPoke() {
		const { pokeApi } = this.state;
		const pokeApimap = pokeApi.map((element) => (element.map((pokemon) => pokemon.types.map((types) => types.type))));
		console.log(pokeApimap.map((element) => element.name));
		const newArray = pokeApimap.filter(type => type.name === 'grass');
		console.log(newArray);
	}

	componentWillUnmount() {
		this.getFunction();
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
								<label> 
									<input 
										type="checkbox"
										/* checked={true} */
										/* value={pokemon.id}
                  onClick={this.onclickButtonFav} */
									/>
								</label>
								{<img className="pokemon-image" src={ pokemon.sprites.front_default } alt={ pokemon.name } />}
							</div>
							<p className="name-pokemon"> { pokemon.name } </p>
							<p> ID:{ pokemon.id }</p>
							<div className="div-elet-fire">
								{ pokemon.types.map((name) => (<p key={ name.url } className={`tag-p-${name.type.name}`}>{ name.type.name }</p>)) }
							</div>
              <div className="div-button-details">
							<button className="button-pokemons-details">Ver detalhes</button>
              </div>
						</section>
					))))}
				</section>}
        
			</main>
		);
	}
}

FavMainPokes.propTypes = {
  favorited: PropTypes.string.isRequired,
};
