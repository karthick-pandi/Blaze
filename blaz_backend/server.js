const express = require('express');
const connectDB = require('./config/db');
const userController = require('./controllers/userController');
require('dotenv').config();

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.post('/api/add_users', userController.createUser);
app.get('/api/users', userController.getAllUsers);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
