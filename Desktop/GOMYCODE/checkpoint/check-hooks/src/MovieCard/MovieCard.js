import React from "react";
import StarRatingComponent from 'react-star-rating-component';
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";

const MovieCard = ({movie}) =>{
    
    return(
 <div className="container">

 <Card className="Cards" >
      <Card.Img className="Poster" variant="top" src={movie.poster} />
      <Card.Body className="text">
        <Card.Title className="title">{movie.name}</Card.Title>
        <Card.Text className="text"> {movie.description}</Card.Text>
        <Button className="btn" variant="primary">download</Button>
        <StarRatingComponent className="star"
       name={"rate"} 
       value={movie.rate} 
       starCount={5}   
    />
      </Card.Body>
      
 </Card>

       </div>
    
          
    )
}
export default MovieCard;
