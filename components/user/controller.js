const store = require('./store.js');

function addUser(name) {
  if (!name) {
    return Promise.reject('Inavalid name');
  }
  const user = {
    name,
  };
  return store.add(user);
}

function listUsers() {
  return store.list();
}
module.exports = {
  addUser,
  listUsers,
};
