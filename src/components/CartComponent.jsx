import React, {useContext} from 'react'
import { CartContext } from '../context/CartProvider';
import Button from 'react-bootstrap/Button';
import CartList from './CartList';

export default function CartComponent() {
  let {cartItems, total, clearCart} = useContext(CartContext);
  return (
    <div>
      {
        cartItems.map((item) => <CartList key={item.id} item={item} />)
      }
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
          <Button type="button" onClick={clearCart}>Checkout</Button>
        </div>
      </div>
    </div>
  )
}
