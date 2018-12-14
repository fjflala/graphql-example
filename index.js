const { GraphQLServer } = require('graphql-yoga');
const fetch = require('node-fetch');

const typeDefs = `
  type Query {
    hello(name: String): String!
    getPerson(id: Int): Person
  }

  type Film {
    title: String
    episode_id: Int
  }
  
  type Planet {
    name: String
  }

  type Person {
    name: String
    films: [Film]
    homeworld: Planet
  }
`;

const resolvers = {
  Person: {
    homeworld: async root => {
      console.log(root.homeworld)
      const response = await fetch(root.homeworld);
      return response.json();
    },
    films: (root) => {
      const promises = root.films.map(async(url) => {
        console.log(url);
        const response = await fetch(url);
        return response.json();
      });

      return Promise.all(promises);
    },

  },
  Query: {
    hello: (_, { name }) => `hello ${name || 'World'}`,
    getPerson: async (_, { id }) => {
      const response = await fetch(`https://swapi.co/api/people/${id}`)
      return response.json();
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server running http://localhost:4000'));
