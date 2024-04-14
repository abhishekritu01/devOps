
// express server
const express = require('express');
const app = express();
const port = 3000;

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// routes
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the application.' });
});


app.listen(port, () => {

    console.log(`Server is running on port ${port}`);
}   
);