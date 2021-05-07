var express = require("express");
var router = express.Router();
var app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const fetch = require("node-fetch");
const db = require("../models/index.js");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.json({ user: "tobi" });
    //res.render('index', { title: 'Express' });
});

/* GET Cowin Data. */
router.get("/data", function (req, res, next) {
    fetch(
        "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=265&date=07-05-2021"
    )
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            res.json(json);
        })
        .catch((err) => console.log("We have an error : " + err));
});


/* Write Email to Db. */
router.post("/register", async function (req, res, next) {
    console.log("body is : " + req.body)
    let matchingRecords = await db.registered_user.findAll({where : {email : req.body.email}})

    if (matchingRecords.length > 0) {
        res.json({success : "Email : " + req.body.email.toLowerCase() + " already exists."})
    }

    let newUser = {
            firstName: req.body.firstName.toLowerCase(),
            lastName: req.body.lastName.toLowerCase(),
            email: req.body.email.toLowerCase(),
            phone: req.body.phone.toLowerCase(),
            ageGroup: req.body.ageGroup.toLowerCase(),
            vaccine: req.body.vaccine.toLowerCase()
        }

        const createResult = await db.registered_user.create(newUser)
        console.log("Saved Success..");
        console.log("Save Something in the DB man.." + createResult);
        res.json({ success: req.body.firstName});

});

module.exports = router;
