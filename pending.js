const schedule = require('node-schedule');

const j = schedule.scheduleJob({hour: 0, minute: 8}, () => {
    console.log('Job runs every day at 5:30AM');
});
