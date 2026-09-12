import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useContext} from 'react'
import { CartContext } from '../context/CartProvider';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

export default function ProductCard({product}) {
  let cardContext = useContext(CartContext);
  return (
    <div className="col-md-4 my-2" >
    <Card style={{ width: '18rem' }}>
      <Link to={`details/${product.id}`}>
        <Card.Img variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        Rs. {product.price} &nbsp;
        <FontAwesomeIcon icon={faHeart} color='red' /> &nbsp;
        <FontAwesomeIcon 
        onClick={() => cardContext.addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
          amount: product.price

        })} 
        icon={faShoppingCart} color='blue'/>
      </Card.Footer>
    </Card>
    </div>
  )
}
