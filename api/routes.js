const express=require('express');
const router = express.Router();

router.get('/hello', require('./controllers/getHello'))
router.get('/ping', require('./controllers/getPing'))

router.get('/status', require('./controllers/status/getStatus'))
router.get('/sunset_sunrise',require('./controllers/getSunriseSunset'))

//Sunrise
router.post('/sunrise',require('./controllers/sunrise/postSunrise'))
router.get('/sunrise',require('./controllers/sunrise/getSunrise'))

//Sunset
router.post('/sunset',require('./controllers/sunset/postSunset'))
router.get('/sunset',require('./controllers/sunset/getSunset'))



module.exports=router;
