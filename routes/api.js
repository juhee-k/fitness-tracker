const db = require("../models");

module.exports = function(app) {

  app.get("/api/workouts", (req, res) => {
    if(err){
      console.log(err);
    } else {
      res.json(workouts)
    }
  });

  app.put("/api/workouts/:workout", ({ params, body }, res => {
    db.Workout.findOneAndUpdate({ _id: params, body }, {$push: {excercises:body}},
      { upsert: true, userFindandModify:false},
      updatedWorkout => {
        res.json(updatedWorkout);

      })
  }));

  app.post("/api/workouts", (res, req) => {
    db.Workout.create({}).then(newWorkout => {
      res.json(newWorkout);
    });
  });

  
};
