const { ApolloServer, gql } = require('apollo-server');
const { format } = require('date-fns');

const typeDefs = gql`
  # Pontos de entrada da API
  type Query {
    hello: String
    date: String
    hour: String
  }
`;

const resolvers = {
  Query: {
    hello() {
      return 'Hello World!'
    },
    date() {
      const date = new Date();
      const formattedDate = format((date), 'dd/MM/yyyy');
      return formattedDate;
    },
    hour() {
      const hour = new Date();
      const formattedHour = format((hour), "HH ':' mm");
      return formattedHour;
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