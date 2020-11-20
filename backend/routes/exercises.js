// This is in charge of routing
const router = require('express').Router();
// Now to pull in the Mongoose Schemma
let Exercise = require('../models/exercise.model');

/* For localhost:5000/. Remember to add route path '/' inside the call to 
 * route.route() or else it will cause an error.
 * CRUD code starts here. GET, POST, DELETE
 */
router.route('/').get((req, res) => {
	Exercise.find()
		/* Don't add a ';' at the end of the expression, before the closing ')' or 
		 * it will cause an error.
		 * How do we get the exercises variable? Magically? lol
		 */
		.then(exercises => res.json(exercises)) 
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{
	// req.body is not passed in the URL, it is separate.
	const username = req.body.username;
	const description = req.body.description;
	// Why doesn't Number have or need a parse() function?
	const duration = Number(req.body.duration);
	const date = Date.parse(req.body.date);

	/* In this object creation, do the key value pairs populate automatically? 
	 * Why aren't keys needed?
	 */
	const newExercise = new Exercise({
		username,
		description,
		duration,
		date
	});

	newExercise.save()
		.then(() => res.json('Exercise added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

// Why are URL parameters are represented by '/:'?
router.route('/:id').get((req, res) => {
	// The URL parameteters are addressed by 'req.params'
	Exercise.findById(req.params.id)
		.then(exercise => res.json(exercise))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	Exercise.findByIdAndDelete(req.params.id)
		.then(() => res.json('Exercise deleted.'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
	/* I use 'req.params.id' to get the Exercise and 'req.body' to repopulate it
	 * with new data from a (JSON object)? after that the resulting Exercise
	 * object is saved in the database.
	 */
	Exercise.findById(req.params.id)
		.then(exercise => {
			exercise.username = req.body.username;
			exercise.description = req.body.description;
			exercise.duration = Number(req.body.duration);
			exercise.date = Date.parse(req.body.date);

			// The call to save is only called if the object is found in the database
			exercise.save()
				.then(() => res.json('Exercise updated!'))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

// This is how we can access this code from outside by require?
module.exports = router;
