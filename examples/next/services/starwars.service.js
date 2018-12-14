
/**
 *  Real world example
 */

/**
 * Module dependencies
 */
const graphql = require('graphql').graphql;
const axios = require('axios');
const { makeExecutableSchema, mergeSchemas } = require('graphql-tools');
const { print } = require('graphql/language/printer');

/**
 * Schemas
 */
const typePerson = require('./schemas/person.graphql');
const typePlanet = require('./schemas/planet.graphql');
const typeSpecie = require('./schemas/specie.graphql');
const typeFilm = require('./schemas/film.graphql');
const typeQuery = require('./schemas/query.graphql');



/**
 *  Resolvers
 *  In this object you'll map all the types defined on typeDefs
 *  You can mutate the data here, and make API calls for every type or attribute of the type
 */
const resolvers = {
  Person: {
    homeworld: async root => {
      const response = await axios.get(root.homeworld);
      return response.data;
    },
    species: (root) => {
      const promises = root.species.map(async(url) => {
        const response = await axios.get(url);
        return response.data;
      });

      return Promise.all(promises);
    },
    films: (root) => {
      const promises = root.films.map(async(url) => {
        const response = await axios.get(url);
        return response.data;
      });

      return Promise.all(promises);
    },

  },
  Query: {
    getPersons: async(_, { limit }) => {
      const response = await axios.get(`https://swapi.co/api/people`);
      return response.data.results.slice(0, limit);
    },
    getPerson: async (_, { id }) => {
      const response = await axios.get(`https://swapi.co/api/people/${id}`)
      return response.data;
    },
  },
};

/**
 * Merge Schemas & resolvers
 */
const schemaQuery = makeExecutableSchema({ typeDefs: [
  print(typeFilm),
  print(typePerson),
  print(typePlanet),
  print(typeSpecie), 
  print(typeQuery),
], resolvers });


/**
 * Queries methods
 */
const getPersons = async() => {
  return await graphql(schemaQuery, `{ 
    getPersons(limit: 9) {
      name
      url
      species {
        name
      }
    } 
  }`);
}

const getPersonById = async(id) => {
  return await graphql(schemaQuery, `{ 
    getPerson(id: ${id}) {
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      birth_year
      gender
      homeworld {
        name
      }
      species {
        name
      }
      films {
        title
      }
    } 
  }`);
}

/**
 * Expose
 */
export default {
  getPersonById,
  getPersons,
};
