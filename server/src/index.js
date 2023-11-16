const cors = require('cors');
const express = require('express');
const app = express();
const port = 8000;
const planets = require('./routes/planets');

app.use(cors());

app.use('/planets/', planets);
app.get('/', (req, res) => {
    res.send("API Service for SolarInfo");
})

app.listen(port, () => {
    console.log(`Server listening at port ${port}...`);
});

module.exports = app