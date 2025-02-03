const objetocontrolador = {};

const note = require("../models/note.model");

objetocontrolador.getnotes = async (req, res) => {
 const notes = await note.find();
  res.json(notes);
}
 

objetocontrolador.createnotes = async (req, res) => {

  const { title, content, date, author } = req.body;
    const newnote = new note({
    title: title,
    content: content,
    date: date,
    author: author
  });

  console.log(newnote)
  await newnote.save();
  res.json({message: 'Note is saved'});
}

// ID


objetocontrolador.getnote = async (req, res) => {

   const foundnote = await note.findById(req.params.id)

  res.json(foundnote)
    } 


objetocontrolador.updatenote = async (req, res) =>{

  const { title, content, date, author } = req.body;
   await note.findOneAndUpdate({_id: req.params.id}, {
    title: title,
    content: content,
    date: date,
    author: author
  })
  res.json({message: "Nota actualizada"})
}


objetocontrolador.deletenote = async (req, res) => {
  await note.findByIdAndDelete(req.params.id)
  res.json({id: 1})
    } 

module.exports = objetocontrolador;
