module.exports=(req, res) => {
    const realm = require('../../../cocorico/myrealm');
    realm.write(()=>{
        let sunset=realm.objects("Parametre").find(b=>b.name="sunset");
        if(sunset)
            sunset.value= req.body.data+"";
        else
            realm.create("Parametre", {_id:Date.now(), name:"sunset",value:req.data+""});
    })
    const Manager = require('../../../cocorico/manager');
    Manager.setSunset();
    res.status(200).send("OK")
}
