import { useState, useEffect } from 'react';
import { LIST_PRODUCTS } from '../API/api';

export function useProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch(LIST_PRODUCTS)
        .then(response => response.json())
        .then(data => setProducts(data));
        setLoading(false);
    }, []);

    return {products, loading};
}