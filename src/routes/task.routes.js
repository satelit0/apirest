import { Router } from "express";
import * as taskController from '../controllers/task.controllers';

const router = Router();

router.get('/', taskController.findAllTasks);

router.post('/', taskController.createTask);

router.get('/done', taskController.findAlldoneTask);

router.get('/:id', taskController.findTaskById);

router.delete('/:id', taskController.deleteTask);

router.put('/:id', taskController.updateTask);

export default router;