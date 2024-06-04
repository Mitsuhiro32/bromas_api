const Broma = require('../models/jokes.model');

module.exports = {
    // Obtener todas las bromas
    getAllJokes: (req, res) => {
        Broma.find()
            .then(bromas => res.json(bromas))
            .catch(error => res.json({ message: 'Algo salió mal', error }));
    },

    // Obtener una sola broma
    getOneJoke: (req, res) => {
        Broma.findOne({ _id: req.params.id })
            .then(broma => res.json(broma))
            .catch(error => res.json({ message: 'Algo salió mal', error }));
    },

    // Crear una broma
    createJoke: (req, res) => {
        const nuevaBroma = {
            setup: req.body.setup,
            punchline: req.body.punchline
        };
        
        Broma.create(nuevaBroma)
            .then(broma => res.json(broma))
            .catch(error => res.json({ message: 'Algo salió mal', error }));
    },

    // Actualizar una broma
    updateJoke: (req, res) => {
        Broma.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(broma => res.json(broma))
            .catch(error => res.json({ message: 'Algo salió mal', error }));
    },

    // Borrar una broma
    deleteJoke: (req, res) => {
        Broma.deleteOne({ _id: req.params.id })
            .then(result => res.json(result))
            .catch(error => res.json({ message: 'Algo salió mal', error }));
    }
};