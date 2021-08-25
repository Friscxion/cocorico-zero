module.exports=(req, res) => {
    const realm = require('../../../cocorico/myrealm');
    const sunset=realm.objects("Parametre").filtered("name=='sunset'")[0];
    res.status(200).send({value:(sunset?sunset.value:"")})
}


