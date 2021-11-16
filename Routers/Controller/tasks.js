const fs = require("fs");

let Tasks = [];

fs.readFile("./tododb.json", (err, date) => {
  if (err) {
    return err;
  } else {
    Tasks = JSON.parse(date.toString());
  }
});

const getAllTasks = (req, res) => {
  console.log("get log",Tasks);
  // res.state(200)
  res.status(200)
  res.json(Tasks);
};

const createTask = (req, res) => {
  const task = {
    id: Tasks.length,
    name: req.body.name,
    iscomplet: false,
    isDel: false,
  };

  Tasks.push(task);

  fs.writeFile("./tosodb.json", JSON.stringify(Tasks), (err) => {
    res.status(200).json(Tasks);
    console.log("post log",Tasks);
  });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  let check = false;

  Tasks.forEach((task) => {
    if (task.id == id) {
      task.isDel = true;
      check = true;
    }
  });

  if (check) {
    fs.writeFile("./tododb.json", JSON.stringify(Tasks), (err) => {
      res.status(200).json(Tasks);
    });
  } else {
    res.status(400).json("No tasks");
  }
};

module.exports = { getAllTasks, deleteTask, createTask };
