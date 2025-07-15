import { useState } from "react";
import BookCard from "./BookCard";


function BookstorePanelAdmin() {
const [books, setBooks] = useState([
    {
      "id": 1,
      "title": "The Serpent & the Wings of Night",
      "image": ("./images/serpents.jpeg"),
      "inStock":true,
      "price": 650
    },
    {
      "id": 2,
      "title": "A Shadow in the Ember",
      "image": ("./images/A Shadow in the Ember.jpeg"),
      "inStock":true,
      "price": 1200
    },
    {
      "id": 3,
      "title": "The Planted Prisoner",
      "image": ("./images/Gild (The Plated Prisoner, 1).jpeg "),
      "inStock":false,
      "price": 950
    },  
    {
      "id": 4,
      "title": "The Nightborn Duet",
      "image": ("./images/The Ashes & the Star-Cursed King_ Book 2 of the Nightborn Duet (Crowns of Nyaxia, 2).jpeg "),
      "inStock":true,
      "price": 800
    },
    {
       "id": 5,
       "title": "Throne of Glass",
       "image": ("./images/Throne of Glass.jpeg"),
       "inStock":false,
       "price": 1150
    },
    {
       "id": 6,
       "title": "The Atlas Six",
       "image": ("./images/The Atlas Six_ Olivie Blake_ 9781250854513.jpeg"),
       "inStock":true,
       "price": 980
    },
    {
       "id": 7,
       "title": "Fourth Wing",
       "image": ("./images/forth wing, rebecca yarros_.jpeg"),
       "inStock":true,
       "price": 1250
    },
    {
      "id": 8,
      "title": "Daughter of No Worlds",
      "image": ("./images/Daughter of No Worlds (The War of Lost Hearts Book 1).jpeg"),
      "inStock":true,
      "price": 875
    },
    {
      "id": 9,
      "title": "Kingdom of the Wicked",
      "image": ("./images/Kingdom of the Wicked (Kingdom of the Wicked, 1).jpeg"),
      "inStock":false,
      "price": 1050
    },
    {
      "id": 10,
      "title": "A Court of Silver Flames",
      "image": ("./images/ACOSF _ corte de chamas prateadas.jpeg"),
      "inStock":true,
      "price": 1300
    }

    ]);
  
    const [searchTerm, setSearchTerm] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [newImage, setNewImage] = useState("");
    const [newPrice, setNewPrice] = useState("");

    const filteredBooks = books.filter((book) => book.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddBook = (e) => { e.preventDefault();
    
    const newBook = {
      id: books.length +1,
      title: newTitle,
      image: newImage,
      price: parseInt(newPrice),
    };

    setBooks([...books, newBook]);

    setNewTitle("");
    setNewImage("");
    setNewPrice("");
  };

    return (
  <div className="bookstore-panel" 
    style={{
    textAlign: "center",
    backgroundColor:"#fdf2f8",
    display : "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center",
    padding:"20px"
    
    }}
  > <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        My Virtual Library
      </h1>

      {/* New: Add Book Form */}
      <form onSubmit={handleAddBook} style={{ marginBottom: "30px" }}>
        <input
          type="text"
          placeholder="Book Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          required
          style={{
            padding: "8px",
            marginRight: "10px",
            width: "180px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          placeholder="Image path (e.g. ./images/book.jpg)"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
          required
          style={{
            padding: "8px",
            marginRight: "10px",
            width: "220px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="number"
          placeholder="Price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          required
          style={{
            padding: "8px",
            marginRight: "10px",
            width: "100px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            backgroundColor: "#d63384",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Add Book
        </button>
      </form>
  
    <h2>Search for a Book</h2>

    <input
      type="text"
      placeholder="Type book title..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"
      style={{
        padding:"10px",
        marginBottom:"16px",
        width:"80%",
        maxWidth:"400px",
        border:"1px solid #ccc",
        fontSize:"16px",
        borderRadius:"8px"
      }}
      />
    
    <div
  className="book-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1200px",
    marginTop: "20px",
  }}
>
  {filteredBooks.map((book) => (
    <BookCard key={book.id} book={book} />
  ))}
</div> 
      </div>
    
  );
}

 export default BookstorePanelAdmin;