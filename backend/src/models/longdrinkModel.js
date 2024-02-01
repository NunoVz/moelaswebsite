import mongoose from 'mongoose';

const longdrinkSchema = new mongoose.Schema({
	id: Number,
  name: String,
  ingredients: [String],
  price: Number,
});

const Longdrink = mongoose.model('Longdrink', longdrinkSchema);

export default Longdrink;
