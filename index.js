const  { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  # Pontos de entrada da API
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello() {
      return 'Hello World!'
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,

});

server.listen().then(({ url }) => {
  console.log(`Executando na porta ${url}`);
});