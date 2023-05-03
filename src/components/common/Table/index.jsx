import styles from './styles.module.css'
import { useProductList } from '../../../hooks/useProductList';
import Loader from '../Loader';

function Table() {
    const {products, loading} = useProductList();

    return (
        <>
            <div className={styles.add}>
                <button type="button" className="btn btn-primary btn-lg"><i className="bi bi-plus-lg"></i></button>
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
                                                <td><img src={el.imgSrc} alt={el.title} /> </td>
                                                <td>{el.title}</td>
                                                <td>{el.category}</td>
                                                <td>${el.price}</td>
                                                <td><button type="button" className="btn btn-link">Edit</button></td>
                                                <td><button type="button" className="btn btn-danger">Delete</button></td>
                                            </tr>
                                    )
                                })
                            }
                        
                        </tbody>
                    </table>
                </div>
            )}
            
        </>
    );
}

export default Table;