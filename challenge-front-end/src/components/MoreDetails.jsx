import React from 'react'
import { Icon } from 'semantic-ui-react'

export default class MoreDetails extends React.Component{
  constructor() {
    super()

    this.moreDetails = this.moreDetails.bind(this);
    this.checkMoreDetails = this.checkMoreDetails.bind(this);

    this.state= {
      pokemon: '',
      returnApi: [],
      MoreDetailsStatus: false,
      pokeStats: [],
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

  render() {
    return(
      <section>
        {this.moreDetails}
      </section>
      )
  }
}
