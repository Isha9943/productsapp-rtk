import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function ProductCard({product}) {
  return (
    <div className="col-md-4 my-2" >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        Rs. {product.price} &nbsp;
        <FontAwesomeIcon icon={faHeart} color='red' /> &nbsp;
        <FontAwesomeIcon icon={faShoppingCart} color='blue'/>
      </Card.Footer>
    </Card>
    </div>
  )
}
