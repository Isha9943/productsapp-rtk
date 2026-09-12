import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


const ProductContext = React.createContext();

export {ProductContext};

export default function ProductProvider(props) {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:1234/products')
        .then(res => setProducts(res.data))
    }, [])
    return (
        <ProductContext.Provider value={{products}}>
            {props.children}
        </ProductContext.Provider>
    );
}
