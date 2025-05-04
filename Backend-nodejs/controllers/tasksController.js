const express = require('express');
const router = express.Router();


const service = require('../services/tasksService')

router.get('/', async (req, res) => {
    const tasks = await service.getAllTasks()
    res.send(tasks)
});


router.get('/:id',async(req,res)=>{
    const task = await service.getTaskById(req.params.id)
    if(task.length==0)
        res.status(404).json('No se encontro la tarea con el id: ' + req.params.id)
    else
        res.send(task)
})

router.delete('/:id',async(req,res)=>{
    const affectedRows = await service.deleteById(req.params.id)
    if(affectedRows==0)
        res.status(404).json('No se encontro la tarea con el id: ' + req.params.id)
    else
        res.send('Se ha eliminado la tarea con id: ' + req.params.id)
})

router.post('/', async (req, res) => {
    try {
        const { title, completed } = req.body;

        // Validación de entrada
        if (!title || typeof completed !== 'boolean') {
            return res.status(400).json({ message: 'Datos inválidos, asegúrate de enviar un título y un valor booleano para completed.' });
        }

        const result = await service.createTask(title, completed);
        res.status(201).json({ message: 'Tarea creada exitosamente'});
    } catch (error) {
        console.error('Error al crear la tarea:', error);
        res.status(500).json({ message: 'Error al crear la tarea' });
    }
});

// Ruta para actualizar una tarea
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, completed } = req.body;

        // Validación de entrada
        if (!id || isNaN(id) || !title || typeof completed !== 'boolean') {
            return res.status(400).json({ message: 'Datos inválidos, asegúrate de enviar un ID válido, un título y un valor booleano para completed.' });
        }

        const affectedRows = await service.updateTask(id, title, completed);
        if (affectedRows === 0) {
            return res.status(404).json({ message: `No se encontró la tarea con el id: ${id}` });
        }

        res.json({ message: `Tarea con id: ${id} actualizada correctamente` });
    } catch (error) {
        console.error('Error al actualizar la tarea:', error);
        res.status(500).json({ message: 'Error al actualizar la tarea' });
    }
});

module.exports = router;
