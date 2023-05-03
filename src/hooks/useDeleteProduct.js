import { useState } from 'react';
import { Delete_PRODUCT_API } from '../API/api';

const useDeleteProduct = () => {
    const [productDeleted, setProductDetleted] = useState([]);
    
    const deleteProduct = async (id) => {
        try {
                const response = await fetch(Delete_PRODUCT_API.replace(':id', id), {
                    method: 'DELETE'
                });
                
                if (!response.ok) {
                    throw new Error('Delete failed');
                }
                const data = await response.json();
                setProductDetleted([data])
            }catch (error) {
                console.error(error);
                return null;
            }
        }
        
        return {productDeleted, deleteProduct};
}
export default useDeleteProduct;