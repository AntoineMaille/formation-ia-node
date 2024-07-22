const CocktailRepository = require('../repositories/cocktail.repository.js');


class CocktailController {

    // route /getcocktails that calls the cocktail service
    static getAllCocktails = async (req, res) => {
    try {
      const cocktails = await CocktailRepository.getAllCocktails();
      res.status(200).json(cocktails);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

    
  }
  
  module.exports = CocktailController;