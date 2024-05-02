const pageRouter = require('express').Router();
const path = require('path');

//if this doesn't work go back and add 2 dots .. before /public/index.html
pageRouter.get('/', (rep, res) =>{
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


pageRouter.get('/notes', (rep, res) =>{
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

module.exports = { pageRouter };