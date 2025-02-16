const { Router } = require// Importa el módulo Router de Express
const { Router } = require('express');
// Crea una nueva instancia del enrutador
const router = Router();

// Importa las funciones del controlador desde 'prueba.controller.js'
const { obtener, enviar, obteneruno, actualizar, borrar } = require('../controllers/prueba.controller');

// Define las rutas y asocia las funciones del controlador a cada ruta

// Ruta raíz ('/') para obtener todos los ítems y crear un nuevo ítem
router.route('/')
    .get(obtener) // Maneja las solicitudes GET para obtener todos los ítems
    .post(enviar); // Maneja las solicitudes POST para crear un nuevo ítem

// Ruta con parámetro de ID ('/:id') para obtener, actualizar y eliminar un ítem específico
router.route('/:id')
    .get(obteneruno) // Maneja las solicitudes GET para obtener un ítem específico por ID
    .put(actualizar) // Maneja las solicitudes PUT para actualizar un ítem específico por ID
    .delete(borrar); // Maneja las solicitudes DELETE para eliminar un ítem específico por ID

// Exporta el enrutador para que pueda ser utilizado en otros archivos
module.exports = router;