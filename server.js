/** @format */

const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => res.send('api running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
