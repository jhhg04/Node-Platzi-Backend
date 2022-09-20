const store = require('./store.js');

function addChat(users) {
  if (!users || !Array.isArray(users)) {
    return Promise.reject('Inavalid user list');
  }
  const chat = {
    users: users,
  };
  return store.add(chat);
}

function listChats(userId) {
  return store.list(userId);
}
module.exports = {
  addChat,
  listChats,
};
