const router = require('express').Router();
const Workout = require("../models/workout.js");

const path = require('path');

//display stats html page
router.get("/stats", (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});

//display exercise html page
router.get("/exercise", (req, res)=> {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});


module.exports = router;