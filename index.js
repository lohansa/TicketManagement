const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

// Load environment variables from .env
require('dotenv').config();

// Initialize the Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Define a test schema and model
const TestSchema = new mongoose.Schema({
    message: { type: String, required: true },
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
