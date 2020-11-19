# Agenda

- Introduction to MERN
- Database Concepts
- Getting started with MongoDB Atlas
- Creating the backend for the exercise tracker app
- React introduction
- Creating the frontend for the exercise tracker app
- Connecting the frontend to the backend

# MERN stack

- *MongoDB:* A document-based open source database.
- *Express:* A web application framefork for Node.js.
- *React:* A JavaScript front-end library for building user interface.
- *Node.js:* JavaScript run-time environment that executes JavaScript code outside of the browser (such as a server).

and *Mongoose:* Simple, schema based solution to model application data.

# Database Concepts

|Tabular (relational) | MongoDB 	 | 
|---------------------|------------|
| Database						| Database	 | 
| Table							  | Collection |
| Row								  | Document	 |
| Index							  | Index			 |
| Join								| $lookup		 |
| Foreign Key					| Reference	 |

# MongoDB Documents
- BSON Types

	{
		name : 'Beau Carnes',
		title : 'Developer and Teacher',
		adress : {
			adress1 : '123 Main Street',
			city : 'Grand Rapids',
			state : 'Michigan',
			postal_code : '49503'
		},
		topics : ['MongoDB', 'Python', 'Javascript', 'Robots'],
		employee_number : 1234,
		location : [449901, 123.0262]
	}

# MongoDB ObjectId
	
	ObjectId('5df5645a48fd21ad2525df65');

Unix timestamp: 4 bytes		Random value: 5 bytes		Count: 3 bytes

MongoDB handles it but I can write them myself; they only have to be unique.


