const express = require('express');
const app = express();
const port = 8000;

const planets = require('./routes/planets');

app.use('/planets/', planets);

app.get('/', (req, res) => {
    res.send("This is index page!");
})

app.listen(port, () => {
    console.log(`Server listening at port ${port}...`);
});