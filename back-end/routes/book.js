const express = require('express');
const router = express.Router();

// Mock database
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A classic novel about the American Dream', coverUrl: 'https://m.media-amazon.com/images/I/71V1cA2fiZL._AC_UF1000,1000_QL80_.jpg' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A powerful story of racial injustice and moral growth', coverUrl: 'https://m.media-amazon.com/images/I/41j-s9fHJcL.jpg' },
    { id: 3, title: '1984', author: 'George Orwell', description: 'A dystopian novel exploring totalitarianism and surveillance', coverUrl: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/book/m/c/5/-original-imagqtdt7tnzf8dk.jpeg?q=90&crop=false' }
  ];
  

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Get book by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(book => book.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

module.exports = router;
