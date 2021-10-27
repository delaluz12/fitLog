const router = require("express").Router();
const Workout = require("../models/workout");


//create new workout
router.post('/workouts', async (req, res) => {

    try {
        let data = await Workout.create(req.body);
        if (!data) {
            res.status(400).json("Bad Request");
        }
        res.status(200).json(data);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//update and add to workout
router.put('/workouts/:id', async (req, res) => {
    try {
        // console.log(req.body);
        let exercise = req.body;
        // console.log(exercise);
        let data = await Workout.updateOne({ _id: req.params.id }, { $push: { 'exercises': exercise } });
        // console.log(data);
        if (!data) {
            res.status(400).json("Bad Request");
        }
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})


//get all workouts in db and sort from newest to oldest to render from new
router.get('/workouts', async (req, res) => {
    try {
        let data = await Workout.aggregate([
            {
                $addFields: { totalDuration: { $sum: "$exercises.duration" } }
            },
        ]);
        if (!data) {
            res.status(400).json("No Workouts");
        }
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//get workout and total their durations for stats page
router.get('/workouts/range', async (req, res) => {
    try {
        let data = await Workout.aggregate([
            {
                $addFields: { totalDuration: { $sum: "$exercises.duration" } }
            },
        ]).sort({day: -1}).limit(7);
        // console.log(data);
        //flip the order of array 
        let dataArr = data.reverse();
        // console.log(dataArr);
        if (!data) {
            res.status(400).json("No Workouts");
        }
        res.status(200).json(dataArr);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});








module.exports = router;