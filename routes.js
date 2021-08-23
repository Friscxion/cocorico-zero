const express=require('express');
const router = express.Router();

router.get('/hello', require('./requests/getHello'))

module.exports=router;
