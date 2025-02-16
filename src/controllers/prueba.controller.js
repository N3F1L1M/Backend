
const objetocontrolador = {};
const axios = require('axios'); // Importamos axios


objetocontrolador.getItems = async (req, res) => {
  try {
    // Hacer la solicitud GET a la API externa
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1'); // Cambia la URL según la API que uses
    
    // Devolver los datos obtenidos como respuesta
    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener los ítems:', error);

    // Manejo de errores
    if (error.response) {
      res.status(error.response.status).json({ 
        message: 'Error en la API externa', 
        error: error.response.data 
      });
    } else if (error.request) {
      res.status(500).json({ message: 'No hubo respuesta de la API externa' });
    } else {
      res.status(500).json({ message: 'Error interno', error: error.message });
    }
  }
};







objetocontrolador.createItem =  (req, res) => {
  // Aquí iría la lógica para manejar la solicitud de crear un nuevo ítem
  const { name, description, date, owner } = req.body;
  const newItem = {
    name: name,
    description: description,
    date: date,
    owner: owner
  };

  console.log(newItem);
  // Aquí iría la lógica para guardar el nuevo ítem
  res.json({ message: 'Ítem creado' });
}

objetocontrolador.getItem =  (req, res) => {
  // Aquí iría la lógica para manejar la solicitud de obtener un ítem específico por ID
  res.json({ message: "Obtener un ítem específico" });
}

objetocontrolador.updateItem =  (req, res) => {
  // Aquí iría la lógica para manejar la solicitud de actualizar un ítem específico por ID

  /* const { name, description, date, owner } = req.body;
  const updatedItem = {
    name: name,
    description: description,
    date: date,
    owner: owner
    
    };*/
    
  console.log("updatedItem");
  // Aquí iría la lógica para actualizar el ítem
  res.json({ message: "Ítem actualizado" });
}

objetocontrolador.deleteItem =  (req, res) => {
  // Aquí iría la lógica para manejar la solicitud de eliminar un ítem específico por ID
  res.json({ message: "Ítem eliminado" });
}

module.exports = objetocontrolador;