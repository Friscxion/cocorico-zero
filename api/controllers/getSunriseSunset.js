const {getSunrise,getSunset} = require("sunrise-sunset-js");
module.exports=(req, res) => {
    const LONGITUDE=6.85;
    const LATITUDE=48.4;
    let sunrise=getSunrise(LATITUDE,LONGITUDE);
    let sunset=getSunset(LATITUDE,LONGITUDE);
    const nconf = require('nconf');
    nconf.use('file', { file: './config.json' });
    nconf.load();
    const add=nconf.get('addon');
    res.send({sunset:sunset,sunrise:sunrise,sunriseAdd:add.sunrise,sunsetAdd:add.sunset})
}
