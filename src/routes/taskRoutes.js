const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');

//Create a task
router.post('/', taskController.createTask);

//Read all tasks
router.get('/', taskController.getTasks);

//Read a single task
router.get('/:id', taskController.getTask);

//Update a task
router.put('/:id', taskController.updateTask);

//Delete a task
router.delete('/:id', taskController.deleteTask);

module.exports = router;