// App Bootstraper

// Load up environment variables from .env file
require('dotenv').config();

// Start server
require('./build/server').start();