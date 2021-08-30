module.exports=(req, res) => {
    const nconf = require('nconf');
    nconf.use('file', { file: './config.json' });
    nconf.load();
    const add=nconf.get('addon');
    res.status(200).send({value:add.sunset})
}


