const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db');
const tasksRoutes = require('./controllers/tasksController');

app.use(cors());
// Middleware
app.use(express.json());
app.use('/api/tasks', tasksRoutes);


// Verificación de conexión y arranque del servidor
db.query("SELECT 1")
    .then(() => {
        console.log('Conexión exitosa');
        app.listen(3000, () => console.log('Server started at http://localhost:3000'));
    })
    .catch(err => console.log('Fallo de conexión \n' + err));
