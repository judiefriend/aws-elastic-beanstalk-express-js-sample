const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! This is Phoenix trying out some cool stuff with AWS'.
The good news is that mu build worked! No i have added a review step so i am adding this text to make a new commit.));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
