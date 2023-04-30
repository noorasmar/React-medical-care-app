import styles from './styles.module.css'

function FeaturedItem({src}) {
    return (
        <div className="card">
            <img src={src} className="card-img-top" alt="..."/>
        </div>
    );
}

export default FeaturedItem;