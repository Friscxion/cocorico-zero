const express = require('express');
const app = express();
const port = 3000;
const schedule = require('node-schedule');

const j = schedule.scheduleJob({hour: 0, minute: 8,name:"ouvrir"}, () => {
    console.log('Job runs every day at 5:30AM');
});

console.log(schedule.scheduledJobs)
app.use('/',require('./routes'))
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
