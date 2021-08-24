module.exports=(req, res) => {
    const realm = require('../../../cocorico/myrealm');
    const sunrise=realm.objects("Parametre").filtered("name=='sunrise'")[0];
    res.status(200).send(sunrise.value)
}


