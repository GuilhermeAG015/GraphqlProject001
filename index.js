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

  type Product {
    name: String!
    price: Float!
    discount: Float
    priceWithDiscount: Float
  }

  # Pontos de entrada da API
  type Query {
    hello: String!
    date: String!
    hour: String!
    newDate: Date
    userLogged: User
    emphasisProduct: Product!
  }
`;

const resolvers = {
  User: {
    salary(user) {
      return user.real_salary
    }
  },
  Product: {
    priceWithDiscount(product) {
      const { price, discount } = product;
      const percent = discount / 100;
      const result =  price - (price * percent);
      return result.toFixed(2);
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
    userLogged() {
      return {
        id: 1,
        name: 'Test Web',
        email: 'email@test.com',
        age: 21,
        real_salary: 1234.56,
        vip: true
      }
    },
    emphasisProduct() {
      const product = {
        name: "Xbox Series X",
        price: 4159.99,
        discount: 10,
      };
      return product;
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