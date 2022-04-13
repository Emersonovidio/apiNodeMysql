const app = require('express')();
require('dotenv').config();
const bodyParser = require('body-parser');

const { getAll, getById } = require('./src/controllers/booksController');

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send();
});

app.get('/books', getAll);
app.get('/books/:id', getById);

app.listen(process.env.PORT || '5000', () => {
  console.log(`Server running at ${process.env.PORT}`);
});