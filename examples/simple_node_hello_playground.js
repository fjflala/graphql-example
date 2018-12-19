/**
 *  Basic example with "Hello World" 
 *  Also you can pass a variable instead of printing "World"
 */
const { GraphQLServer } = require('graphql-yoga');

/**
 *  typeDefs
 * Is a string variable, with the types definition of th graph
 * You must pass this to the graphQlServer instance
 * This types definitions must be mapped on the resolvers object
 */
const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

/**
 *  Resolvers
 *  In this object you'll map all the types defined on typeDefs
 *  You can mutate the data here, and make API calls for every type
 */
const resolvers = {
  Query: {
    hello: (_, { name }) => `hello ${name || 'World'}`,
  },
};

/**
 *  This will start the playground server.
 */
const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server running http://localhost:4000'));
