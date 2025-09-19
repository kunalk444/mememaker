import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function MemeCard(props) {
    const navigate=useNavigate();
  return ( 
      <Card  style={{ maxWidth:"300px",margin:"15px"}}>
                <Card.Img className='meme-img' src={props.url} />
                <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Button
                onClick={()=>navigate(`/edits?url=${props.url}`)} 
                variant="primary">Edit Meme</Button>
                </Card.Body>
            </Card>
    )
}

export default MemeCard