
/**
 *  Example using the Start Wars API & ¡Imports!
 */
const { GraphQLServer } = require('graphql-yoga');
const axios = require('axios');
const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = importSchema(__dirname + '/schemas/query.graphql');

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
    films: (root) => {
      const promises = root.films.map(async(url) => {
        const response = await axios.get(url);
        return response.data;
      });

      return Promise.all(promises);
    },

  },
  Query: {
    getPerson: async (_, { id }) => {
      const response = await axios.get(`https://swapi.co/api/people/${id}`)
      return response.data;
    },
  },
};

/**
 *  This will start the playground server.
 */
const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server running http://localhost:4000'));
