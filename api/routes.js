const express=require('express');
const router = express.Router();

router.get('/hello', require('./controllers/getHello'))

module.exports=router;
