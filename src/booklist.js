import React from "react";

function BookList({books}){
    return(
        <div>
            <h2>Available Books</h2>
            {books.map((book) => (<div key={book.id}> <img src={book.image} alt={book.name} width="100"/> 
            <h3>{book.name} </h3>
            <p>Price: ${book.price}</p>
            </div>
        ))}
            </div>
    );
}

export default BookList;

