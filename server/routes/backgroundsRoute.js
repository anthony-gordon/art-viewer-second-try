const express = require('express')
const router = express.Router()
var db = require ('../db')

router.get('/', function (req, res){
    db.getBackgrounds()
    .then(backgrounds => {
        res.json(backgrounds)
    })
})

module.exports = router