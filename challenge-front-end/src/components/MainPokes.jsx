import React from 'react';
import { getAllPokemons, getApiPokemon } from '../services/Api';
import FavMainPokes from './FavMainPokes';
import { Rating } from 'semantic-ui-react'

export default class MainPokes extends React.Component {
	constructor() {
		super();
    
		this.getFunction = this.getFunction.bind(this);
		this.getAllPokes = this.getAllPokes.bind(this);
		this.filterApiPoke = this.filterApiPoke.bind(this);
		this.onclickButtonFav = this.onclickButtonFav.bind(this);

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
		const api = await getAllPokemons();
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

	onclickButtonFav(event) {
		{<FavMainPokes favorited= { event.target.value }/>;}
	}

	componentWillUnmount() {
		this.getFunction();
	}

	render() {
		const RatingExampleRating = () => (
			<Rating icon='heart' defaultRating={0} size="massive" />
		)
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
									{RatingExampleRating()}
								</label>
								{<img className="pokemon-image" src={ pokemon.sprites.front_default } alt={ pokemon.name } />}
							</div>
							<p className="name-pokemon"> { pokemon.name } </p>
							<p> ID:{ pokemon.id }</p>
							<div className="div-elet-fire">
								{ pokemon.types.map((name) => (<p key={ name.url } className={`tag-p-${name.type.name}`}>{ name.type.name }</p>)) }
								{/* <p className="tag-p-fire">Fire</p> */}
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