const booksModel = require('../models/booksmodels');

const getAll = async () => {
  const book = await booksModel.getAll();
  return book;
};

const bookId = async (id) => {
const [getByid] = await booksModel.searchById(id);
  if (getByid === undefined) return false;
  return getByid;
};

module.exports = { 
 getAll,
 bookId,
};