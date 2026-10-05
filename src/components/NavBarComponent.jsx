import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';

export default function NavBarComponent() {
  let quantity = 0;
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>React_Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/products'}>Product</Nav.Link>
            <Nav.Link as={Link} to={'/cart'}>
            <FontAwesomeIcon icon={faShoppingCart} color='blue' />
            <Badge>{quantity}</Badge>
            </Nav.Link>
            <Nav.Link as={Link} to={'/new_product'}>New Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
