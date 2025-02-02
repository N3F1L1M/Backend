const objetocontrolador = {};

const notemodel = require("../models/note");

objetocontrolador.getnotes = async (req, res) => {
 const notes = await note.find();
  res.json(notes);
}
 

objetocontrolador.createnotes = (req, res) => {

  const { title, content, date, author } = req.body;
    const newnote = new note({
    title: title,
    content: content,
    date: date,
    author: author
  });

  console.log(newnote);

  res.json({message: 'Note is saved'});
};

objetocontrolador.getnote = (req, res) =>
  res.json({
    id: 1,
  });

objetocontrolador.updatenote = (req, res) =>
  res.json({
    id: 1,
  });

objetocontrolador.deletenote = (req, res) =>
  res.json({
    id: 1,
  });

module.exports = objetocontrolador;
