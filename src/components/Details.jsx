import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

export default function Details() {
  let {id} = useParams();

  let [product, setProduct] = useState({});
  useEffect(() => {
    // Fetch product details based on the id
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data));
  }, [id]);
  return (
    <div>
      <h1> Details</h1>
      {
        product && <div>
          <img src={product.image} alt={product.title} /> <br />
          Name: {product.name} <br />
          Description: {product.description} <br />
          Price: Rs. {product.price} <br />
        </div>



      }

    </div>
  )
}
