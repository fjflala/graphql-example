/**
 * Module depenencies
 */
import React, { Component } from 'react';

/**
 * Import Service with GraphQL
 */
import starwarsService from '../services/starwars.service';

/**
 * DetailView component
 */
export default class DetailView extends Component {
  static getInitialProps ({ query: { id } }) {
    return { personID: id };
  }

  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  componentWillMount() {
    starwarsService.getPersonById(this.props.personID)
      .then(res => {
        console.log(res)
        this.setState({
          data: res.data.getPerson
        });
      })
      .catch(console.error);
  }

  getImage(type) {
    const types = {
      droid: 'http://theinspirationgrid.com/app/uploads/2015/09/illustration-flat-star-wars-01-805x805.jpg',
      human: 'http://theinspirationgrid.com/app/uploads/2015/09/illustration-flat-star-wars-05-805x805.jpg',
    };

    return types[type];
  }

  render () {
    return (
      <section className="detail-view">
        <link href="https://fonts.googleapis.com/css?family=Poller+One" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"></link>
        <style global jsx>{`
          body,
          html {
            background-color: #151515;
            margin: 0;
            padding: 0;
            color: #f4f4f4;
            font-family: 'Raleway', cursive;
            padding-bottom: 100px;
          }
          
          .list-view__logo {
            max-width: 100%;
          }

          .list-view__logo-container {
            max-width: 30%;
            margin: 32px auto;
          }
          
          .ui-detail {
            background-color: #f5f5f5;
            max-width: 30%;
            margin: 0 auto;
            border-radius: 4px;
            color: #333;
          }

          .ui-detail__title {
            padding: 0;
            margin: 0 0 8px;
            font-family: 'Poller One', cursive;
          }

          .ui-detail__info {
            box-sizing: border-box;
            padding: 16px;
          }

          .ui-detail__image-container {
            max-height: 300px;
            overflow: hidden;
            border-top-right-radius: 4px;
            border-top-left-radius: 4px;
          }

          .ui-detail__image {
            max-width: 100%;
            margin-top: -50px;
            border-top-right-radius: 4px;
            border-top-left-radius: 4px;
          }

          .ui-detail__info-row {
            border-bottom: 1px solid #ccc;
            margin: 0 -16px;
            padding: 0 16px;
          }

          .ui-detail__info-row:last-child {
            border-bottom: 1px solid transparent;
          }

          .ui-detail__info-label {
            display: block;
            border-bottom: 1px solid #ccc;
            margin: 0 -16px;
            padding: 16px;
          }
        `}</style>
        <div className="list-view__logo-container">
          <img className="list-view__logo" src="https://www.clipartmax.com/png/full/6-65467_star-wars-logo-png-file-star-wars-transparent-background.png" />
        </div>

        <article className="ui-detail">
          <div className="ui-detail__image-container">
            <img className="ui-detail__image" src={this.getImage(this.state.data.species && this.state.data.species[0].name.toLowerCase())} />
          </div>
          <div className="ui-detail__info">
            <h1 className="ui-detail__title">{this.state.data.name} ({this.state.data.species && this.state.data.species[0].name})</h1>
            <div className="ui-detail__info-row">
              <label className="ui-detail__info-label">Información personal</label>
              <p>
                <strong>Género</strong><br />
                <span>{this.state.data.gender}</span>
              </p>
              <p>
                <strong>Año de Nacimiento</strong><br />
                <span>{this.state.data.birth_year}</span>
              </p>
              <p>
                <strong>Planeta</strong><br />
                <span>{this.state.data.homeworld && this.state.data.homeworld.name}</span>
              </p>
            </div>
            <div className="ui-detail__info-row">
              <label className="ui-detail__info-label"><strong>Peliculas</strong></label>
              <p>
                {this.state.data.films && this.state.data.films.map(function(elem){
                  return elem.title;
                }).join(', ')}
              </p>
            </div>
          </div>
        </article>
      </section>
    );
  }
}
