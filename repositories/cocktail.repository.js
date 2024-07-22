const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config(); 
class CocktailRepository{

   /**
   * Get all cocktails from the API
   * @returns {Promise<any>} A promise that resolves with the list of cocktails or rejects with an error
   */
    static getAllCocktails = async () => {
        return axios.get(process.env.API_URL_BASE + process.env.API_ENDPOINT_ALL_COCKTAIL)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
    }


    
  }
  
  module.exports = CocktailRepository;