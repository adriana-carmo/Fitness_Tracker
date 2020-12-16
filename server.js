const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3100;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_db", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api-routes.js"))
app.use(require("./routes/html-routes.js"))

// Port 
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});