const express = require('express');
const app = express();

const users = require('./routes/users');

const ROUTES = {
  users: '/users'
};
const PORT = 3000;

app.use(express.json());

// Routes
app.use(ROUTES.users, users);

app.listen(PORT, () => {
  console.log(`Server up and running, PORT: ${PORT}`);
});