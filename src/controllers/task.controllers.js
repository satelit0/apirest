import Task from '../models/Task';
import {getPagination} from '../libs/getPagination';
//Get all tasks

export const findAllTasks = async (req, res) => {
    try {
        const {page, size, title, done} = req.query;
        const conditionTitle = title ? {title: {$regex: new RegExp(title), $options: "i"},} : {}; 
        const conditionDone = done ?   {done:  {$regex: new RegExp(done),  $options: "i"},} : {};
        const {limit, offset} = getPagination(page, size);
        const data = await Task.paginate((title) ? conditionTitle : conditionDone, {offset , limit });
        res.json({
            totalItems: data.totalDocs,
            task: data.docs,
            totalPages: data.totalPages,
            currentPage: data.page - 1
        });
    }catch (error) {
        res.status(500).json({
            message: error.message || "Ourrio un error al momento de devolver los datos"
        });
    }
}

export const findAlldoneTask = async (req, res) => {
    const task = await Task.find({ done: true });
    res.json(task);
}

export const findTaskById = async (req, res) => {
    const {id} = req.params;
    try {
    const task = await Task.findById(id);
    if(!task){
        return res
               .status(404)
               .send({message: "tarea no encontrada."});
    }
    debugger;
    console.log(req.params);
    res.json(task);
    // throw new Error(); //Lanza un error 
}catch(error){
    res.status(404).json({
        errCode: 102,
        message: error.message || `Error al devolver la tarea con id: ${id}`
    }); 
}
}

export const createTask = async (req, res) => {
   
    if(!req.body.title){
        return res.status(400).send({message: "El titulo no puede estar vacio."});
    }
    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done ? req.body.done : false
        });
        const taskSaved = await newTask.save();
        res.json(taskSaved);
    } catch (error) {
        res.status(500).json({
            errCode: 101,
            message: error.message || "Ourrio un error al momento de crear la tarea"
        });
    }
}

export const updateTask = async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json(updatedTask);
}

export const deleteTask = async (req, res) => {
    const {id} = req.params;
    try {
        await Task.findByIdAndDelete(id);
    res.json({ mensaje: "Acción realizada con éxito" });
    } catch (error) {
        res.status(500).json({
            errCode: 104,
            message: `Error al devolver la tarea con id: ${id}`
        });    
    }
    
}



