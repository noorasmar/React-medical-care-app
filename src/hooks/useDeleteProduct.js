import { Delete_PRODUCT_API } from '../API/api';

const useDeleteProduct = () => {
    
    const deleteProduct = async (id) => {
        try {
                const response = await fetch(Delete_PRODUCT_API.replace(':id', id), {
                    method: 'DELETE'
                });
                
                if (!response.ok) {
                    throw new Error('Delete failed');
                }
            }catch (error) {
                console.error(error);
                return null;
            }
        }
        
        return deleteProduct;
}
export default useDeleteProduct;