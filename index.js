const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const taskRouter = require("./Routers/routes/tasks");
dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());

app.use("/tasks", taskRouter);


const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`run on port ${PORT}`);
})