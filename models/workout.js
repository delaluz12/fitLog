const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {

            name: { type: String, trim: true, required: "Enter the name of exercise" },

            type: { type: String, trim: true, required: "Choose type of exercise" },

            weight: { type: Number },

            sets: { type: Number },

            reps: { type: Number },

            duration: { type: Number },

            distance: { type: Number },
        },
    ],

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
