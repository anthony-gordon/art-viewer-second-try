const express = require('express')
const router = express.Router()
var db = require ('../db')

router.get('/', function (req, res){
    db.getBackgrounds()
    .then(backgrounds => {
        res.json(backgrounds)
    })
})

router.post('/', (req, res) => {
    db.addBackground(req.body)
            .then(background => res.json(background))
        .catch(err => res.status(500).send(err.message + 'SERVER ERROR'))  
})


module.exports = router