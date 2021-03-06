module.exports=(req, res) => {
    const nconf = require('nconf');

    nconf.use('file', { file: './config.json' });
    nconf.load();
    nconf.set('addon:sunrise', req.body.data);


    nconf.save((err)=>{
        if (err)
            return console.error(err.message);
        console.log('Configuration saved successfully.');
    });

    const Manager = require('../../../cocorico/manager');
    Manager.setSunrise();
    res.status(200).send("OK")
}
