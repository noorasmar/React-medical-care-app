import { useState } from 'react';
import { ADD_PRODUCT_API } from '../API/api';

const useAddProduct = () => {
    const [productAdded, setProductAdded] = useState([]);

    const addProduct = async (productData, onSuccess) => {
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

            const data = await response.json();
            setProductAdded([...productAdded, data])
            onSuccess(data);
        } catch (error) {
        }
    };

    return {productAdded, addProduct, setProductAdded};
};

export default useAddProduct;