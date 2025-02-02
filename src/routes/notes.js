const { Router } = require('express');
const router = Router();

const { getnotes,createnotes, getnote, updatenote, deletenote } = require('../controllers/notes.controller');

router.route('/')
    .get(getnotes)
    .post(createnotes);

    router.route('/:id')
    .get(getnote)
    .put(updatenote)
    .delete(deletenote);



module.exports = router;