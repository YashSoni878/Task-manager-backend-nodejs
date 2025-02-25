const Task = require('../models/task');

//Create a task
exports.createTask = async (req, res) => {
    try{
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    } catch(error){
        res.status(400).send(error);
    }
};

//Read all tasks
exports.getTasks = async (req, res) => {
    try{
        const tasks = await Task.find({});
        res.status(200).send(tasks);
    } catch(error){
        res.status(500).send(error);
    }
};

//Read a single task
exports.getTask = async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.status(404).send();
        }
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error);
    }
};

//Update a task
exports.updateTask = async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true });
        if (!task) {
            return res.status(404).send();
        }
        res.status(200).send(task);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findByIdAndDelete(_id);
        if (!task) {
            return res.status(404).send();
        }
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error);
    }
};