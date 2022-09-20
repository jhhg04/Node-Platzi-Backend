const mongoose = require('mongoose');

async function connect(url) {
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Database Connected');
    })
    .catch((err) => {
      console.log('Database NOT Connected ' + err);
    });
}

module.exports = connect;
