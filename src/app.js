const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(bodyParser.json());

//Routes
app.use('/tasks', taskRoutes);

//Mongodb connection
mongoose.connect('mongodb://localhost:27017/taskManager', {
}).then(() => {
    console.log("Connected to mongodb");
}).catch((error) => {
    console.log("Error connecting to mongodb", error);
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});