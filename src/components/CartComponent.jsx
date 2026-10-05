import React from 'react'
import Button from 'react-bootstrap/Button';
import CartList from './CartList';

export default function CartComponent() {
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          &nbsp;
        </div>

        <div className="col-md-4">
          Total: {total};
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          &nbsp;
        </div>

        <div className="col-md-4">
          <Button type="button">Checkout</Button>
        </div>
      </div>
    </div>
  )
}
