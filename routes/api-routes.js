const router = require("express").Router();
const dbSchema = require("../models/workoutSchema")

// routes

// api GET /workouts
router.get("/api/workouts", (req, res) => {
  dbSchema.find()
  .then(function(results) {
    res.json(results)
  })
});

router.post("/api/workouts", (req, res) => {
  dbSchema.create(req.body)
  .then(function(results) {
    res.json(results)
  })
})


// api/workouts (PUT request)
router.put("/api/workouts/:id", (req, res) => {
  dbSchema.update({
    _id: req.params.id
  }, {
    $push: {
      exercises: req.body
    }
  }
  )
  .then(function(results) {
    res.json(results);
  })
})

router.get("/api/workouts/range", (req, res) => {
  dbSchema.find()
  .then(function(results) {
    res.json(results)
  })
})


module.exports = router;