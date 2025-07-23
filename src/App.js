import { useState, useEffect } from "react";
import AddBookForm from "./AddBookForm";
import BookstorePanelAdmin from "./BookstorePanelAdmin";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/books")
      .then((r) => {
        if (!r.ok) {
          throw new Error("Failed to fetch books");
        }
        return r.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  function handleAddBook(newBook) {
    setBooks([...books, newBook]);
  }

  return (
    <div className="App">
      <BookstorePanelAdmin books={books} />
    </div>
  );
}

export default App;

