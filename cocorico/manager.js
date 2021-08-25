//const realm = require('./myrealm');
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
        // const Gpio = require('pigpio').Gpio;
        // const motor = new Gpio(14, {mode: Gpio.OUTPUT});
        // const button = new Gpio(21, {
        //     mode: Gpio.INPUT,
        //     pullUpDown: Gpio.PUD_DOWN,
        //     edge: Gpio.EITHER_EDGE
        // });
        // button.on("alert",()=>{
        //     console.log("press")
        // })
        // let pulseWidth = 1000;
        // let increment = 100;
        // setInterval(() => {
        //     motor.servoWrite(pulseWidth);
        //     pulseWidth += increment;
        // }, 100);
        console.log("open")
    }

    fermer = () => {
        console.log("fermer")
    }

    setSunrise = () => {
        const param=realm.objects("Parametre").filtered("name=='sunrise'")[0];
        let add=param?parseInt(param.value):0;

        let sunrise=getSunrise(LATITUDE,LONGITUDE);
        sunrise.setMinutes(sunrise.getMinutes()+add);

        let horraire = { hour:sunrise.getHours(), minute:sunrise.getMinutes() }

        if(this.ouverture)
            this.ouverture.reschedule(horraire);
        else
            this.ouverture = schedule.scheduleJob(horraire, this.ouvrir);

    }
    setSunset = () => {
        const param=realm.objects("Parametre").filtered("name=='sunset'")[0];
        let add=param?parseInt(param.value):0;

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
