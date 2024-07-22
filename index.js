const express = require('express');
const cocktailRouter = require('./routes/cocktail.router.js');

const app = express();

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


app.use('/', cocktailRouter);

// Handle other endpoints or invalid requests
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});