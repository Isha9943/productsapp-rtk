import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import { useContext } from 'react';
import { ProductContext } from '../context/ProductProvider';


export default function ProductList() {
  let {products} = useContext(ProductContext);
  return (
    <div className="row">
      {
        products && products.map(product => <ProductCard key={product.id} product={product} />)
      }
    </div>
  )
}
