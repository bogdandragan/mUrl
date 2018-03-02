// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


// Get our API routes
const api = require('./routes/api');
//const auth = require('./routes/auth');

const app = express();

require('./dbConnect');
//require('./auth');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));

// Set our api routes
app.use('/api', api);
//app.use('/auth', auth);

// Catch all other routes and return the index file
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '../dist/index.html'));});
app.get('/home', (req, res) => {res.sendFile(path.join(__dirname, '../dist/index.html'));});
app.get('/*/stats', (req, res) => {res.sendFile(path.join(__dirname, '../dist/index.html'));});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3001';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
