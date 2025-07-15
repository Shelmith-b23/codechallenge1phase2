import React from "react";

function AddBookForm() {
    return(
        <form>
            <h2>Add a new Book</h2>
            <input type = "text"
                   placeholder="Title"/>
            <input type = "text"
                   placeholder="Author"/>
            <input type="number"
                   placeholder="Price"/> 
            <button type="submit">Add Book</button>             
        </form>
    );
}

export default AddBookForm;













































































































