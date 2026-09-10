import './App.css';
import {Container} from 'react-bootstrap';
import {Route, Routes}  from 'react-router-dom';

import NavBarComponent from './components/NavBarComponent';
import Default from './components/Default';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import { lazy, Suspense } from 'react';

const Details = lazy(() => import('./components/Details'));
const CartComponent = lazy(() => import('./components/CartComponent'));

function App() {
  return (
    <Container>
      <NavBarComponent />
      <Routes>
        <Route path='/products' element={<ProductList/>} />
        <Route path='/cart' element={
          <Suspense fallback={<h1>Loading Cart...</h1>}>
            <CartComponent/>
          </Suspense>
          } />
        <Route path='/details/:id' element={
          <Suspense fallback={<h1>Loading Details...</h1>}>
            <Details/>
          </Suspense>
        } />
        <Route path='/new_product' element={<ProductForm />} />
        <Route path='/' element={<ProductList/>} />
        <Route path='*' element={<Default />} />
      </Routes>
    </Container>
  );
}

export default App;
