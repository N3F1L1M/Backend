
// errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error('Error capturado:', err);

    if (err.response) {
        // Error con respuesta de la API externa
        res.status(err.response.status).json({
            message: 'Error en la API externa',
            error: err.response.data
        });
    } else if (err.request) {
        // No hubo respuesta de la API externa
        res.status(500).json({ message: 'No hubo respuesta de la API externa' });
    } else {
        // Error desconocido
        res.status(500).json({ message: 'Error interno', error: err.message });
    }
};

module.exports = errorHandler;