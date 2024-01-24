const express = require('express');
const app = express();
const ejs = require('ejs');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Sample data of books
const books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' },
  { id: 4, title: 'Book 4', author: 'Author 4' },
  { id: 5, title: 'Book 5', author: 'Author 5' },
  { id: 6, title: 'Book 6', author: 'Author 6' },
  { id: 7, title: 'Book 7', author: 'Author 7' },
  { id: 8, title: 'Book 8', author: 'Author 8' },
  { id: 9, title: 'Book 9', author: 'Author 9' },
  { id: 10, title: 'Book 10', author: 'Author 10' },
  { id: 11, title: 'Book 11', author: 'Author 11' }
  // Add more books as needed
];

// 1. Menampilkan data semua buku dalam bentuk JSON
app.get('/books', (req, res) => {
  res.json(books);
});

// 2. Menampilkan data 1 buku dalam bentuk JSON berdasarkan parameter id
app.get('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

// 3. Menampilkan data semua buku dalam bentuk tabel pada template EJS
app.get('/ejs/books', (req, res) => {
  res.render('Assgn1', { books });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
