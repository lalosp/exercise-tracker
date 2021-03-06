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

```
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
```

# MongoDB ObjectId
	
	ObjectId('5df5645a48fd21ad2525df65');

Unix timestamp: 4 bytes		Random value: 5 bytes		Count: 3 bytes

MongoDB handles it but I can write them myself; they only have to be unique.

# React

- It lets you compose large and complex user interfaces from small and isolated pieces of code called components.  
- Components tell React what we want to see on the screen.
- When data changes React will update our components.
- A React component takes in a parameters named 'props' and returns a hierarchy of views to display through the render method.
- It uses JSX which is converted into HTML when it goes through preprocessing.
- JSX comes with the power of JavaScript within braces.
- Instead of class it uses className.

# Git - Github

When I want to remove a file folder from github but not locally I can do:

	git rm -r --cached directory-name/
	git rm --cached filename

Add the directory or file exception on .gitignore and then: 

	git add *
	git commit -m 'removed file/directory from github'
	git push


