const { users, profiles } = require("../data/db");
const { format } = require('date-fns');

module.exports = {
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