import mongoose from 'mongoose';

const shotSchema = new mongoose.Schema({
	id: Number,
  name: String,
  ingredients: [String],
});

const Shot = mongoose.model('Shot', shotSchema);

export default Shot;
