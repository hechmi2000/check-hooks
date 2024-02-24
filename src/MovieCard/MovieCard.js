import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';
import './MovieCard.css'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function MovieCard({movie}) {
   const navigate =useNavigate()
  return (
    <Card className='movieCard' style={{ width: '18rem' }}>
      <Card.Img className='MovieImg' variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
    
        <Card.Text variant="outline-danger" onClick={()=> navigate('/Description')}>
         {movie.description} </Card.Text>
        <Card.Text>{movie.rate} Stars</Card.Text>
        <ReactStars value={movie.rate} edit={false} size={25}/>
        <Button variant="primary" onClick={()=> navigate(`/Description/${movie.id}`)}>More details</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;