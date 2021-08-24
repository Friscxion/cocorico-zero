const express = require('express');
const app = express();
const port = 3000;

const Manager = require('./cocorico/manager');

app.use('/',require('./api/routes'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
