module.exports=(req, res) => {
    const realm = require('../../../cocorico/myrealm');
    realm.write(()=>{
        let sunrise=realm.objects("Parametre").find(b=>b.name="sunrise");
        if(sunrise)
            sunrise.value= req.body.data+"";
        else
            realm.create("Parametre", {_id:Date.now(), name:"sunrise",value:req.data+""});
    })
    const Manager = require('../../../cocorico/manager');
    Manager.setSunrise();
    res.status(200).send("OK")
}
