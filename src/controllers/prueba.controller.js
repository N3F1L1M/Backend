const objetocontrolador = {};

objetocontrolador.getItems = async (req, res) => {
  // Aquí iría la lógica para manejar la solicitud de obtener todos los ítems
  res.json({ message: "Obtener todos los ítems" });
}

objetocontrolador.createItem = async (req, res) => {
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

objetocontrolador.getItem = async (req, res) => {
  // Aquí iría la lógica para manejar la solicitud de obtener un ítem específico por ID
  res.json({ message: "Obtener un ítem específico" });
}

objetocontrolador.updateItem = async (req, res) => {
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

objetocontrolador.deleteItem = async (req, res) => {
  // Aquí iría la lógica para manejar la solicitud de eliminar un ítem específico por ID
  res.json({ message: "Ítem eliminado" });
}

module.exports = objetocontrolador;