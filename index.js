const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/' );


app.listen(port);
console.log('Server started at http://localhost:' + port);