const realm = require('./myrealm');
const { getSunrise, getSunset } = require('sunrise-sunset-js');
const schedule = require('node-schedule');

const LONGITUDE=6.85;
const LATITUDE=48.4;

class Manager {
    constructor() {
        this.setSunrise();
        this.setSunset();
    }

    ouvrir = () => {
        console.log("open")
    }
    fermer = () => {
        console.log("fermer")
    }

    setSunrise = () => {
        let add=realm.objects("Parametre").find(b=>b.name="sunriseAdd");
        let sunrise=getSunrise(LATITUDE,LONGITUDE);
        let horraire={
            hour:sunrise.getHours(),
            minute:sunrise.getMinutes()
        }
        if(!this.ouverture)
            this.ouverture= schedule.scheduleJob(horraire, this.ouvrir);
        else
            this.ouverture.reschedule(horraire);

    }
    setSunset = () => {
        let sunset=getSunset(LATITUDE,LONGITUDE);
        let horraire={
            hour:sunset.getHours(),
            minute:sunset.getMinutes()
        }
        if(!this.fermeture)
            this.fermeture= schedule.scheduleJob(horraire, this.fermer);
        else
            this.fermeture.reschedule(horraire);
    }
}

module.exports=new Manager();
