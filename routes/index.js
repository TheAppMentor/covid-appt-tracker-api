var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ user: 'tobi' })
  //res.render('index', { title: 'Express' });
});

/* GET Cowin Data. */
router.get('/data', function(req, res, next) {
    fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=265&date=07-05-2021')
        .then(res =>  res.json())
        .then(json => 
            {
                console.log(json) 
                res.json(json) 
            })
    .catch(err => console.log("We have an error : " + err))
});

/* Write Email to Db. */
router.get('/save', function(req, res, next) {
   console.log("Save Something in the DB man..") 
    res.json({success : true})
});

module.exports = router;
