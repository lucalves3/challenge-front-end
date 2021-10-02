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

    this.state= {
      pokemon: '',
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
    console.log(findPokemon);
  }

  chandleKeyDown(event) {
    if (event.key === 'Enter') {
      this.getPokemonSearch()
    }
  }


  render() {
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
          {LoaderExampleInlineCentered()}
          </section>
        </main>
      </section>
    )
  }
}
