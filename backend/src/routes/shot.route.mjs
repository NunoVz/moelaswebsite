
import express from 'express';
import Shot from '../models/shotModel.mjs';

const router = express.Router();

// Define shot routes here
router.get('/', (req, res) => {
	Shot.find()
		.then((shots) => res.json(shots))
		.catch((err) => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
	const name = req.body.name;
	const ingredients = req.body.ingredients;

	const newShot = new Shot({
		name,
		ingredients,
	});

	newShot
		.save()
		.then(() => res.json('Shot added!'))
		.catch((err) => res.status(400).json('Error: ' + err));
});

export default router;
