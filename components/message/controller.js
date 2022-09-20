const e = require('express');
const store = require('./store.js');

function addMessage(user, message) {
  // console.log(user);
  // console.log(message);
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] No hay user o message');
      reject('Los Datos son incorrectos');
      return false;
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };
    // console.log(fullMessage);
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid Data');
      return false;
    }
    const result = await store.updateText(id, message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject('Invalid ID');
      return false;
    }
    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
