const db = require("../models");

module.exports = function(app) {

  app.get("/api/workouts", (req, res) => {
    db.Workout.find().then(workouts => res.json(workouts))
  });

  app.put("/api/workouts/:workout", ({ params, body }, res) => {
    db.Workout.findByIdAndUpdate(params.workout, {$push: {exercises:body}})
      .then(data=> res.json('success!')).catch(err=> console.log(err))
  });

  app.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then(newWorkout => {
      res.json(newWorkout);
    });
  });

  app.get("/api/workouts/range", (req,res)=> {
    db.Workout.find().limit(7).then(workouts => res.json(workouts))
  })
};
