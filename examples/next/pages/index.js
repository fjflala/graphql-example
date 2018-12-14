/**
 * Module dependencies
 */
import React from 'react';
import Link from 'next/link';

/**
 * Import Service with GraphQL
 */
import starwarsService from '../services/starwars.service';

/**
 * ListView component
 */
export default class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    starwarsService.getPersons()
      .then(res => {
        this.setState({ data: res.data.getPersons });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getImage(type) {
    const types = {
      droid: 'http://theinspirationgrid.com/app/uploads/2015/09/illustration-flat-star-wars-01-805x805.jpg',
      human: 'http://theinspirationgrid.com/app/uploads/2015/09/illustration-flat-star-wars-05-805x805.jpg',
    };

    return types[type];
  }

  getId(url) {
    return url && url.match(/([0-9])/g);
  }

  render() {
    return (
      <section className="list-view">
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
          }

          .list-view {
            max-width: 75%;
            margin: 0 auto;
          }

          .list-view__logo {
            max-width: 100%;
          }

          .list-view__logo-container {
            max-width: 30%;
            margin: 32px auto;
          }

          .ui-list {
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            margin: 0;
            padding: 0;
          }

          .ui-item {
            flex: 1 3 20%;
            background-color: #f5f5f5;
            border-radius: 4px;
            color: #333;
            margin: 16px;
            padding: 16px;
            overflow: hidden;
          }

          .ui-item__title {
            margin: 0 0 8px;
            font-family: 'Poller One', cursive;
          }

          .ui-item__image {
            max-width: 100%;
            border-top-right-radius: 4px;
            border-top-left-radius: 4px;
          }

          .ui-item__image-container {
            margin-left: -16px;
            margin-right: -16px;
            margin-top: -16px;
            border-top-right-radius: 4px;
            border-top-left-radius: 4px;
            margin-bottom: 8px;
          }

          .ui-item__button-container {
            margin-right: -16px;
            margin-left: -16px;
            margin-bottom: -16px;
            margin-top: 16px;
          }
          
          .ui-item__button {
            display: block;
            width: 100%;
            text-decoration: none;
            background-color: #333;
            color: #f5f5f5;
            padding: 16px;
            border-bottom-right-radius: 4px;
            border-bottom-left-radius: 4px;
            box-sizing: border-box;
            text-align: center;
          }
          
        `}</style>
        <div className="list-view__logo-container">
          <img className="list-view__logo" src="https://www.clipartmax.com/png/full/6-65467_star-wars-logo-png-file-star-wars-transparent-background.png" />
        </div>
        <ul className="ui-list">
          {Array.isArray(this.state.data) && this.state.data.map(person => (
            <li className="ui-item" key={person.name}>
              <div className="ui-item__image-container">
                <img className="ui-item__image" src={this.getImage(person.species[0].name.toLowerCase())} />
              </div>
              <h3 className="ui-item__title">{person.name}</h3>
              <span className="ui-item__type">
                {person.species[0].name}
              </span>
              <div className="ui-item__button-container">
                <Link
                  href={{pathname: '/person', query: { id: this.getId(person.url) }}}
                  as={`/person/${this.getId(person.url)}`}
                >
                  <a className="ui-item__button">Ver más</a>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
