import { useState, useEffect } from 'react';
import { LIST_PRODUCTS } from '../API/api';

export function useProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    fetch(LIST_PRODUCTS)
        .then(response => response.json())
        .then(data => setProducts(data.slice(0, 8)));
    }, []);

    return products;
}