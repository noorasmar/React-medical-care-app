
import { UPDATE_PRODUCT_API } from '../API/api';

const useUpdateProduct = () => {
    
    const updateProduct = async (id, newData) => {
        try {
            const response = await fetch(UPDATE_PRODUCT_API.replace(':id', id), {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Update failed');
            }
            return data;
            } catch (error) {
            console.error(error);
            return null;
            }
        }
        
        return updateProduct;
}
export default useUpdateProduct;