const express = require('express');
const router = require('./routes/routes.js');
const cors = require('cors')
const connect = require('./database/db.js');
const factRoute = require('./routes/factRoute.js');

const port = 8080
const app = express();

app.use(cors())
app.use(express.json())

connect();
app.use(router)
app.use(factRoute)

app.listen(port, () => {
    console.log(`your backend server is running on ${port}`)
})
