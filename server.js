const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});


//require routes
    //html routes to display the public pages
app.use(require("./routes/views.js"));
    //api routes

    

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });