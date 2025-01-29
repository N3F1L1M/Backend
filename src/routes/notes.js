const { Router } = require('express');
const router = Router();

const { getnotes } = require('../controllers/notes.controller');

router.route('/')
    .get(getnotes)



    .post((req, res) => res.send(' POST Notes Routes'))

    //route.route('/:id');
    //.get();
    //.put();
    //.delete();



module.exports = router;