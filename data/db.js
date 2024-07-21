let id = 1
function nextId () {
  return id++;
}

const users = [
    {
      id: nextId(),
      name: 'Test One',
      email: 'testone@email.com',
      age: 21,
      profile_id: 1,
      status: 'ATIVO',
    },
    {
      id: nextId(),
      name: "Test Two",
      email: 'testtwo@email.com',
      age: 22,
      profile_id: 2,
      status: 'INATIVO',
    },
    {
      id: nextId(),
      name: 'Test Three',
      email: 'testthree@email.com',
      age: 23,
      profile_id: 1,
      status: 'BLOQUEADO',
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

module.exports = {
    users,
    profiles,
    nextId,
}