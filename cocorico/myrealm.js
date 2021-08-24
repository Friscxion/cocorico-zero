const Realm = require("realm");

const Parametre = {
    name: "Parametre",
    properties: {
        _id: "int",
        name: "string?",
        value: "string?"
    },
    primaryKey: "_id",
};

const myrealm = new Realm({
    path: "cocorico.realm",
    schema: [Parametre]
});

module.exports=myrealm;
