let users = [
  { id: 1, name: 'Іван' },
  { id: 2, name: 'Марія' }
];

let nextId = 3;

function getUsers() {
  return users;
}

function addUser(name) {
  const user = { id: nextId++, name };
  users.push(user);
  return user;
}

// для сброса при тестах
function resetUsers() {
  users = [
    { id: 1, name: 'Іван' },
    { id: 2, name: 'Марія' }
  ];
  nextId = 3;
}

module.exports = {
  getUsers,
  addUser,
  resetUsers
};
