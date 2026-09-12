import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react'
import { CartContext } from '../context/CartProvider'
import {Button} from 'react-bootstrap'

export default function CartList({item}) {
  let cartContext = useContext(CartContext);
  return (
    <div className="row">
      <div className="col-md-2">
        <img src={item.image} style={{ width: '50px', height: '50px' }} />
      </div>
      <div className="col-md-2">
        {item.title}
      </div>
      <div className="col-md-4">
        <Button type="button" onClick={() => cartContext.decrement(item.id)}>-</Button>
        &nbsp; {item.quantity} &nbsp;
        <Button type="button" onClick={() => cartContext.increment(item.id)}>+</Button>
      </div>
      <div className="col-md-2">  
        {item.price}
      </div>
      
      <div className="col-md-2">
        {item.amount}
      </div>
      
      
    </div>
  )
}
