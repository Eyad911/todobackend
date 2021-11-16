const express = require('express');
const {getAllTasks,createTask,deleteTask }=require('./../Controller/tasks');






const taskRouter = express.Router();


taskRouter.get("/", getAllTasks);
taskRouter.post("/",createTask);
taskRouter.delete("/:id", deleteTask);






module.exports =taskRouter;