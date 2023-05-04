import { useState } from 'react';
import { UPDATE_PRODUCT_API } from '../API/api';

const useUpdateProduct = () => {
    const [productUpdated, setProductUpdated] = useState([]);
    
    const updateProduct = async (id, newData, onSuccess) => {
        try {
                const response = await fetch(UPDATE_PRODUCT_API.replace(':id', id), {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newData),
                });
                
                if (!response.ok) {
                    throw new Error(data.message || 'Update failed');
                }

                const data = await response.json();
                setProductUpdated([data])
                onSuccess(data);

            } catch (error) {
                console.error(error);
                return null;
            }
        }
        
        return {productUpdated, updateProduct};
}
export default useUpdateProduct;