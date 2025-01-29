const objetocontrolador = {};

objetocontrolador.getnotes = (req, res) => res.json({
    "id": 1,
    "name": "Juan Perez",
    "email": "juan.perez@example.com",
    "age": 30,
    "address": {
      "street": "Av. Siempre Viva",
      "city": "Springfield",
      "zip": "12345"
    }    })

    module.exports = objetocontrolador;