import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import CartComponent from './components/CartComponent';
import CartProvider from './context/CartProvider';
import ProductProvider from './context/ProductProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ProductProvider>
    <CartProvider>
      <App />
    </CartProvider>
    </ProductProvider>
  </BrowserRouter>
);

