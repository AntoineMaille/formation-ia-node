const express = require('express');
const CocktailController = require('../controller/cocktail.controller.js');

const router = express.Router();

// create a route /cocktail that calls the cocktailController
router.get('/cocktail', (req, res) => {
    return CocktailController.getAllCocktails(req, res);
});

module.exports = router;