const express = require('express');
const bodyParser = require('body-parser');

// const router = require('./components/message/network.js');
const db = require('./db.js');
const router = require('./network/routes.js');

db(
  'mongodb+srv://user:pass@cluster0.scovxet.mongodb.net/?retryWrites=true&w=majority'
);

const app = express();
app.use(bodyParser.json());

// app.use(router);
router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('Server run on port 3000');
