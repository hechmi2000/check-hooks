import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import { movies } from '../data'
import {useNavigate} from 'react-router-dom'

const Description = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [foundMovie, setFoundMovie] = useState({})

    useEffect(() => {
      let movie = movies.find((el) => el.id == id)
      setFoundMovie(movie)
    }, [id])
    
    
  return (
    <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.shutterstock.com/image-illustration/pristine-reflective-lake-show-image-260nw-2305485315.jpg" />
      <Card.Body>
        <Card.Title>{foundMovie.name}</Card.Title>
        <Card.Text>
          {foundMovie.description}
        </Card.Text>
        <Button variant="primary" onClick={()=> navigate(-1)}>Back</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Description