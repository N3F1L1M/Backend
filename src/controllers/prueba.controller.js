
const objetocontrolador = {};
const axios = require('axios'); // Importamos axios


objetocontrolador.getItems = async (req, res, next) => { 
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments'); 
    res.json(response.data);
  } 
  catch (error) { next(error);  } //pasa al middleware de errores
     
 
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