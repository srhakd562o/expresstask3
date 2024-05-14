const express = require('express')

const router = express.Router()

router.get('/', (req,res,next) =>{
    console.log("you are in shop folder");
    res.send('<h1>You are in shop folder</h1>')
});

module.exports = router;