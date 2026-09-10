import './App.css';
import NavBarComponent from './components/NavBarComponent';
import Default from './components/Default';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import CartComponent from './components/CartComponent';
import Details from './components/Details';
import {Container} from 'react-bootstrap';
import {Route, Routes}  from 'react-router-dom';

function App() {
  return (
    <Container>
      <NavBarComponent />
      <Routes>
        <Route path='/products' element={<ProductList/>} />
        <Route path='/cart' element={<CartComponent/>} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/new_product' element={<ProductForm />} />
        <Route path='/' element={<ProductList/>} />
        <Route path='*' element={<Default />} />
      </Routes>
    </Container>
  );
}

export default App;
