const express = require('express');

// Initialize the Express application
const app = express();

// Define the port the server will listen on
const PORT = 3000;

// Define a route for '/'
app.get('/', (req, res) => {
    res.send('Hello, Lohansa!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
