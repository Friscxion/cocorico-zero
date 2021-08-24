const express=require('express');
const router = express.Router();

router.get('/hello', require('./controllers/getHello'))

//sunrise
router.post('/sunrise',require('./controllers/sunrise/postSunrise'))
router.get('/sunrise',require('./controllers/sunrise/getSunrise'))
module.exports=router;
