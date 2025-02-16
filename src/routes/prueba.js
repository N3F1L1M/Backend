// Importa el módulo Router de Express
const { Router } = require('express');
// Crea una nueva instancia del enrutador
const router = Router();

// Importa las funciones del controlador desde 'prueba.controller.js'
const { getItems, createItem, getItem, updateItem, deleteItem } = require('../controllers/prueba.controller');

// Define las rutas y asocia las funciones del controlador a cada ruta

// Ruta raíz ('/') para obtener todos los ítems y crear un nuevo ítem
router.route('/')
    .get(getItems) // Maneja las solicitudes GET para obtener todos los ítems
    .post(createItem); // Maneja las solicitudes POST para crear un nuevo ítem

// Ruta con parámetro de ID ('/:id') para obtener, actualizar y eliminar un ítem específico
router.route('/:id')
    .get(getItem) // Maneja las solicitudes GET para obtener un ítem específico por ID
    .put(updateItem) // Maneja las solicitudes PUT para actualizar un ítem específico por ID
    .delete(deleteItem); // Maneja las solicitudes DELETE para eliminar un ítem específico por ID

// Exporta el enrutador para que pueda ser utilizado en otros archivos
module.exports = router;