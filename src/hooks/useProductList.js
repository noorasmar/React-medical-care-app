import { useState, useEffect } from 'react';

export function useProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    fetch('https://645164e6a3221969116291d5.mockapi.io/api/v1/product')
        .then(response => response.json())
        .then(data => setProducts(data.slice(0, 8)));
    }, []);

    return products;
}