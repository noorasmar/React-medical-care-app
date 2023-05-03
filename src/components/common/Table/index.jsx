import styles from './styles.module.css'
import { useProductList } from '../../../hooks/useProductList';
import useAddProduct from '../../../hooks/useAddProduct';
import useUpdateProduct from './../../../hooks/useUpdateProduct';
import useDeleteProduct from './../../../hooks/useDeleteProduct';
import useImageToBinary from './../../../hooks/useImageToBinary';
import Loader from '../Loader';
import { useState, useEffect } from 'react';

function Table() {

    const {products, loading, setProducts} = useProductList();
    const {productAdded, addProduct} = useAddProduct();
    const {productUpdated, updateProduct} = useUpdateProduct();
    const {productDeleted, deleteProduct} = useDeleteProduct();

    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);
    const [imgSrc, setImgSrc] = useState('/assets/images/tool1.png');

    useEffect(() => {
        if (productAdded.length > 0) {
            
            setProducts([...products, ...productAdded]);
        }
    }, [productAdded]);

    useEffect(() => {
        if (productDeleted.length > 0) {
        const deletedProductId = productDeleted[0].id;
        setProducts(products.filter((product) => product.id !== deletedProductId));
    }
    }, [productDeleted]);

    useEffect(() => {
        if (productUpdated.length > 0) {
            const updatedProduct = productUpdated[0];
            const updatedProductIndex = products.findIndex(product => product.id === updatedProduct.id);
            const updatedProductDataCopy = [...products];
            updatedProductDataCopy[updatedProductIndex] = updatedProduct;
            setProducts(updatedProductDataCopy);
        }
    }, [productUpdated]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const productData = { title, category, price, imgSrc};
            addProduct(productData, (newProduct) => {
                setTitle('')
                setCategory('')
                setPrice(0)
            });
        } catch (error) {
            console.error(error);
        }
    }

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            const productData = { title, category, price, imgSrc};
            updateProduct(id, productData, (newProduct) => {
                setTitle('')
                setCategory('')
                setPrice(0)
            });
        } catch (error) {
            console.error(error);
        }
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        
        deleteProduct(id)
    }

    return (
        <>
            <div className={styles.add}>
                <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="bi bi-plus-lg"></i>
                </button>
            </div>

            {loading ? (
                    <Loader />
            ) : (
                <div className="table-responsive">
                    <table className="table table-dark table-hover">
                        
                        {products.length <= 0 ? <caption>No Products Found</caption> : null}
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((el)=>{
                                    return (
                                            <tr key={el.id} className={styles['row-data']}>
                                                <td>{el.id}</td>
                                                <td><img src={process.env.PUBLIC_URL + el.imgSrc} alt={el.title} /> </td>
                                                <td>{el.title}</td>
                                                <td>{el.category}</td>
                                                <td>${el.price}</td>
                                                <td><button type="button" className="btn btn-link" data-bs-toggle="modal" onClick={e => setId(el.id)} data-bs-target="#exampleModal2">Edit</button></td>
                                                <td><button type="button" className="btn btn-danger" data-bs-toggle="modal" onClick={e => setId(el.id)} data-bs-target="#exampleModal3">Delete</button></td>
                                            </tr>
                                    )
                                })
                            }
                        
                        </tbody>
                    </table>
                </div>
            )}
            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form  onSubmit={handleSubmit}>
                            <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title :</label>
                                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" id="title" placeholder="Orthopedics" required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="category" className="form-label">Category :</label>
                                        <input type="text" value={category} onChange={e => setCategory(e.target.value)} className="form-control" id="category" placeholder="Technology" required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">Price :</label>
                                        <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="form-control" id="price" placeholder="6.48" required/>
                                    </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel2">Update Product</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form  onSubmit={handleUpdate}>
                            <div className="modal-body">
                                    <div className="mb-3">
                                        <label htmlFor="edittitle" className="form-label">Title :</label>
                                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-control" id="edittitle" placeholder="Orthopedics" required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="editcategory" className="form-label">Category :</label>
                                        <input type="text" value={category} onChange={e => setCategory(e.target.value)} className="form-control" id="editcategory" placeholder="Technology" required/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="editprice" className="form-label">Price :</label>
                                        <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="form-control" id="editprice" placeholder="6.48" required/>
                                    </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel3">Delete Product</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure to delete this product ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <form  onSubmit={handleDelete}>
                                <button type="submit" className="btn btn-danger" data-bs-dismiss="modal">delete</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Table;