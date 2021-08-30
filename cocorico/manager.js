const nconf=require("nconf");
nconf.use('file', { file: './config.json' });
nconf.load();
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
        const Gpio = require('pigpio').Gpio;
        const button = new Gpio(21, {
            mode: Gpio.INPUT,
            pullUpDown: Gpio.PUD_DOWN,
            edge: Gpio.EITHER_EDGE
        });
        let boucle=true;
        button.on('interrupt', (level) => {
            console.log("interrupt")
            boucle=false;
        });
        console.log("slt")
        const motor = new Gpio(14, {mode: Gpio.OUTPUT});
        let pulseWidth = 1000;
        let increment = 100;
        let interval=setInterval(() => {
            console.log("boucle")
            motor.servoWrite(pulseWidth);
            pulseWidth += increment;
            if(!boucle)
                clearInterval(interval);
        }, 100);
        console.log("fin")
    }

    fermer = () => {
        console.log("fermer")
    }

    setSunrise = () => {
        const add=nconf.get('addon').sunrise;
        let sunrise=getSunrise(LATITUDE,LONGITUDE);
        sunrise.setMinutes(sunrise.getMinutes()+add);

        let horraire = { hour:sunrise.getHours(), minute:sunrise.getMinutes() }

        if(this.ouverture)
            this.ouverture.reschedule(horraire);
        else
            this.ouverture = schedule.scheduleJob(horraire, this.ouvrir);

    }
    setSunset = () => {
        const add=nconf.get('addon').sunset;

        let sunset=getSunset(LATITUDE,LONGITUDE);
        sunset.setMinutes(sunset.getMinutes()+add)

        let horraire = { hour:sunset.getHours(), minute:sunset.getMinutes() }
        if(this.fermeture)
            this.fermeture.reschedule(horraire);
        else
            this.fermeture = schedule.scheduleJob(horraire, this.fermer);

    }
}

module.exports=new Manager();
