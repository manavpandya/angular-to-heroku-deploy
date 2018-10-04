const express = require('express');
const path = require('path');

// using express
const app = express();

// Use my projects static files
app.use(express.static(__dirname + '/dist/publishangulartoheroku'));

// Targeting root project file
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/publishangulartoheroku/index.html'));
});

// Server listening on port 4300
app.listen(process.env.PORT || 4300);