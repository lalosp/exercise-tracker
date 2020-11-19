const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
	Exercise.find()
		.then(exercises)
		.catch();
});

router.route('/add').post((req, res) =>{

});

module.exports = router;
