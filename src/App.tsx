import React, { useState } from 'react';
import './App.css';

interface Book {
  title: string;
  author: string;
  year: number;
}

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [year, setYear] = useState<number>(2024);

  const addBook = () => {
    const newBook: Book = { title, author, year };
    setBooks([...books, newBook]);
  };

  return (
    <div className="App">
      <h1>Library Management</h1>

      <section>
        <h2>Add a New Book</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
        />
        <button onClick={addBook}>Add Book</button>
      </section>

      <section>
        <h2>All Books</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              {book.title} by {book.author} ({book.year})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default App;
