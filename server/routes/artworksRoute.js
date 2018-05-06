const express = require('express')
const router = express.Router()
var db = require ('../db')

router.get('/', function (req, res){
    db.getArtworks()
    .then(artworks => {
        res.json(artworks)
    })
})

module.exports = router