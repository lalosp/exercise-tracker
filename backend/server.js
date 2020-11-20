const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// This loads the environment variables from the .env file on process.env
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; // Where database login credentials go
/* useUnifiedTopology is set to use the new Server Discovery and Monitoring 
 * engine as well as the other parameters
 */
mongoose.connect(uri, { 
	useNewUrlParser: true, 
	useCreateIndex: true, 
	useUnifiedTopology: true 
});
const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

/* This sets up the localhost:5000/exercises and localhost:500/users CRUD 
 * operations '/': get and '/add': post.
 * Here we integrate the exported routers with their associated database model
 * policy for CRUD operations.
 */
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});
