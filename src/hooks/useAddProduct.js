import { useState } from 'react';
import { ADD_PRODUCT_API } from '../API/api';

const useAddProduct = () => {
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);

const addProduct = async (productData, onSuccess) => {
    setIsLoading(true);

    try {
    const response = await fetch(ADD_PRODUCT_API, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
    });

    if (!response.ok) {
        throw new Error('Failed to create product');
    }

    const createdProduct = await response.json();
    onSuccess(createdProduct);
    setIsLoading(false);
    } catch (error) {
        setError(error.message);
        setIsLoading(false);
    }
};

return { isLoading, error, addProduct };
};

export default useAddProduct;