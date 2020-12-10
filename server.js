// ==============================================================================
// DEPENDENCIES
// Series of npm package(s) that will be used to give server useful functionality
// ==============================================================================
const express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for the express server
// ==============================================================================

// Tells node there is an "express" server created
const app = express();

// Sets an initial port used later in the listener
const PORT = process.env.PORT || 3001;