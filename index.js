const { ApolloServer, gql } = require('apollo-server');
const { format } = require('date-fns');

const users = [
  {
    id: 11,
    name: 'Test One',
    email: 'testone@email.com',
    age: 21,
  },
  {
    id: 12,
    name: "Test Two",
    email: 'testtwo@email.com',
    age: 22,
  },
  {
    id: 13,
    name: 'Test Three',
    email: 'testthree@email.com',
    age: 23,
  }
];

const profiles = [
  {
    id: 1,
    name: 'Common',
  },
  {
    id: 2,
    name: 'administrator',
  },
];

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

  type Profile {
    id: Int!
    name: String!
  }

  # Pontos de entrada da API
  type Query {
    hello: String!
    date: String!
    hour: String!
    newDate: Date
    userLogged: User
    emphasisProduct: Product!
    numbers: [Int!]! # Retornará um Array obrigatóriamente e será obrigatóriamente de int
    users: [User]!
    user(id: ID): User
    profiles: [Profile]
    profilesById(id: Int): Profile 
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
    },
    numbers() {
      const numbers = Array(6).fill(0).map(() => Math.floor(Math.random() * 60));
      const cres = (a, b) => a - b;
      return numbers.sort(cres);
    },
    users() {
      return users;
    },
    user(_, { id }) {
      const selected = users.filter((e) => e.id === Number(id));
      return (selected) ? selected[0] : null; 
    },
    profiles() {
      return profiles;
    },
    profilesById(_, { id }) {
      const selected = profiles.filter((e) => e.id === id);
      return (selected) ? selected[0] : null;
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