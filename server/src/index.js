const cors = require('cors');
const express = require('express');
const app = express();
const port = 8000;
const planets = require('./routes/planets');

app.use(cors({ origin: "*" }))

app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:3000', 'https://solar-info-frontend.vercel.app/'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});

app.use('/planets/', planets);
app.get('/', (req, res) => {
    res.setHeader("Content-Type")
    res.send("API Service for SolarInfo");
})

app.listen(port, () => {
    console.log(`Server listening at port ${port}...`);
});

export default app