const connection = require('../services/connections');

const getAll = async () => {
  const [book] = await connection
  .execute('SELECT * FROM buddhistsBooks.books');
  return book;
  };

const searchById = async (id) => {
const [book] = await connection
  .execute('SELECT * FROM buddhistsBooks.books WHERE books_id = ?', [id]);
  return book;
  };


module.exports = { 
  getAll,
  searchById,
};