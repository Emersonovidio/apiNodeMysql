const booksService = require('../services/booksServices');

const getAll = async (_req, res) => {
const allBooks = await booksService.getAll();
  res.status(200).json(allBooks);
};

const getById = async (req, res) => {
const { id } = req.params;
const bookGetId = await booksService.bookId(id);
 if (!bookGetId) return res.status(404).json({ message: 'book not found' });
 return res.status(200).json(bookGetId);
};

  module.exports = { 
    getAll,
    getById,
  };