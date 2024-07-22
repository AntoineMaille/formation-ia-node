const axios = require('axios'); 
const CocktailRepository = require('../repositories/cocktail.repository'); 


jest.mock('axios'); // Mock axios to control its behavior in tests

describe('CocktailRepository', () => {
  describe('getAllCocktails', () => {
    it('should fetch cocktails from the API and return them', async () => {
      const mockCocktails = [
        { id: 1, name: 'Mojito' },
        { id: 2, name: 'Margarita' },
      ];
      axios.get.mockResolvedValue({ data: mockCocktails });

      const cocktails = await CocktailRepository.getAllCocktails();

      expect(axios.get).toHaveBeenCalledWith(process.env.API_URL_BASE + process.env.API_ENDPOINT_ALL_COCKTAIL);
      expect(cocktails).toEqual(mockCocktails);
    });

    it('should handle other errors when fetching cocktails', async () => {
      const mockError = new Error('Network error');
      axios.get.mockRejectedValue(mockError);

      await expect(CocktailRepository.getAllCocktails()).rejects.toThrow('Network error');
    });
  });
});
