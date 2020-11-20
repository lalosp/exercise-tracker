# The steps I took to build the project and to run it

```bash
	node -v
	npx create-react-app mern-exercise-tracker
```

npx executes node modules withour installing them.
The above command failed so I had to follow some guidance from stackoverflow.

	npm cache clean --force
	sudo npm install -g npm@next
	npx create-react-app mern-exercise-tracker

Clearing the cache and installing the latest version of npm fixed it
Next I created a backend folder to work on the backend first

	cd mern-exercise-tracker
	mkdir backend
	cd backend
	npm init -y

To createa package.json file and install dependency modules

	npm install express cors mongoose dotenv

- *express:* Lighweight and fast web framework for Node.js.
- *cors:* *Cross Origin Resource Sharin* Allows Ajax requests to skip the *Same Origin Policy* and access resources from remote hosts. The cors package is express middleware with options to access something outside of our server from our server.
- *mongoose:* Interacting with MongoDB through Node.js simpler.
- *dotenv:* Load environment variables from a .env file into process.env so I don't have to set environment variables in my linux box and only store them in a file.

	sudo npm install -g nodemon

Makes development easier by automatically restarting the node app when file changes in the directory are detected.

	touch server.js

Where my server code will go.
After setting up an initial express server with cors

	nodemon server

After adding the code to connect to ATLAS through mongoose I need to set enviranmental variables for database connection I get from MongoDB ATLAS site in the .env file.

	touch .env

I whitelisted my current IP address on MongoDB atlas and created a user with a secure password. 
After that I copied and pasted the connection string on the site to my .env file as the ATLAS_URI variable replacing my login credentials and the server connected.
I had an error because I misspelled 'connect' as 'conect' on my call to mongoose that turned my mongoose connection undefined and crashed the server but I fixed that.
After that I made the database schema models for the exercises and users.

	mkdir models	
	touch models/exercise.model.js
	touch models/user.model.js

After creating the schemas and the restrictions and exporting them I needed to create a routes directory to put in the *CRUD* operations code.

	mkdir routes
	touch routes/exercises.js
	touch routes/users.js

I added routes for '/' and '/add' on both localhost:5000/users and localhost:5000/exercises.
I had a problem with including ';' inside the '.then(() => res.json('Exercise added!);)' on both models/exercises.js and models/users.js; Leaving them without the ';' corrected the error.
The server connected to MongoDB Atlas but it gave me a weird warning called UnhandledPromiseRejectionWaring about throwing inside an async function without a .catch() block or by rejecting a promise which was not handled with .catch().
It also gave me the DeprecationWarning: in future versions of Node.js promise rejections which are not handled will terminate the server.

