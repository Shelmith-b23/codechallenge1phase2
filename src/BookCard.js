 import React, {useState} from "react";
 

function BookCard({ book }) {

    const { title, price, image, inStock } = book;

    const [rating, setRating] = useState(0);
    const [isFavorite, setIsFavorite] = useState (false);

    const handleStarClick = (index) => {
        setRating(index + 1);
    };


    return (
        <div 
          className="book-card"
          style={{
            border:"1px solid #ddd",
            borderRadius:"8px",
            padding:"16px",
            margin:"12px",
            width:"200px",
            position:"relative",
            textAlign:"center",
            boxShadow:"4px 8px rgba(0,0,0,0.1)",
            backgroundColor:"#fff",
          }}
          >
          
        <span
            style={{
                position:"absolute",
                top:"8px",
                left:"8px",
                backgroundColor:inStock ? "#cce5cc" : "#f8d7da",
                color:inStock ? "#2d662d" : "#842029",
                padding:"4px 8px",
                borderRadius:"4px",
                fontSize:"12px",
            }}
        >   
            {inStock ? "In Stock" : "Out of Stock"}
        </span>
        
            <img
            src={image}
            alt={title}
            style={{
                width:"120px",
                height:"180px",
                objectFit:"cover",
                borderRadius:"4px",
                marginBottom:"12px",
                boxShadow:"0 2px 6px rgba(0,0,0,0.1)",
            }}
            />
            <h3 style={{ fontSize:"16px",
                         marginBottom:"8px",
                       }}>{title}</h3>
                       <p style={{ fontWeight:"bold",
                                   color:"#555"
                                 }}>Ksh {price}</p>
                        <div style={{ 
                            marginTop:"10px",
                        }}>
                            {[...Array(5)].map ((_, index) => (
                                <span
                                key={index}
                                onClick={() => handleStarClick(index)}
                                style={{ color:index < rating ? "#ffcc00" : "#ccc", fontSize:"20px", cursor:"pointer", fontSize:"14px",}}></span>
                            ))}
                        </div>
                        <button onClick = {() => setIsFavorite(!isFavorite)}
                            style={{
                                marginTop:"10px",
                                padding:"6px 12px",
                                backgroundColor:isFavorite ? "#f8d7da" : "#e2e3e5",
                                border:"none",
                                borderRadius:"4px",
                                cursor:"pointer",
                                fontSize:"14px",
                            }}
                            >
                              {isFavorite ? "- Remove from Favorites" : "+ Add to Favorites"}
                            </button>
            </div>
        );
    }
export default BookCard;    


        