const { ApolloServer, gql } = require('apollo-server');
const { format } = require('date-fns');

const typeDefs = gql`
  scalar Date

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
  }

  # Pontos de entrada da API
  type Query {
    hello: String!
    date: String!
    hour: String!
    newDate: Date
    userLogged: User
  }
`;

const resolvers = {
  User: {
    salary(user) {
      return user.real_salary
    }
  },
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
    },
    userLogged(user) {
      return {
        id: 1,
        name: 'Test Web',
        email: 'email@test.com',
        age: 21,
        real_salary: 1234.56,
        vip: true
      }
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