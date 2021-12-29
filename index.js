require('dotenv').config();
const express = require('express'),
    cors = require('cors'),
    routes = require('./routes/routes');

const app = express(),
    port = process.env.PORT || 3001;

app.use(cors());
routes(app);

app.listen(port, ()=> console.log(`app is listening on port ${port}`))
