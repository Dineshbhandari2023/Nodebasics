const express = require('express');
const router = express.Router();


const genres = [
    {id: 1, name: 'Action'},
    {id: 2, name: 'Horror'},
    {id: 3, name: 'Fary tale'},
];

//  GET
router.get('/', (req,res) => {
    res.send(genres);
});

router.get('/:id', (req,res) => {
    let genre = genres.find(d => d.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('ID not found!'); 
    res.send(genre);  
});

// POST
router.post('/', (req,res) => {
    const { error } = validategenres(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    let genre = {
        id: genres.length + 1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
});

// PUT
router.put('/:id', (req, res) => {
    let genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('ID not found!');

        // const result = validatepractice(req.body);
    const { error } = validategenres(req.body);

    if (error) return res.status(400).send(error.details[0].message);
    genre.name = req.body.name;
    res.send(genre);
});

// DELETE
router.delete('/:id', (req, res) => {
    let genre = genres.find(d => d.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('ID not found!');
    const index = genres.indexOf(prac);
    genres.splice(index, 1);
    res.send(genre);
});

module.exports = router;