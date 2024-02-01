import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import api from './routes/api.route.mjs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3500;
const DATABASE_URL = process.env.DATABASE_URL;

// Middleware


// MongoDB Connection
mongoose.connect(DATABASE_URL)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
	console.log('Connected to MongoDB');
});

// Routes
app.use("/api", api)


// Start server
app.listen(PORT, () => {
	console.log('Server is running on port ' + PORT);
});
