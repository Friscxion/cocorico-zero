const express=require('express');
const router = express.Router();

router.get('/', require('./requests/getHello'))

module.exports=router;
