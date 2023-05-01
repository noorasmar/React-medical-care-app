import styles from './styles.module.css'
import { Title, ServicesItem } from '../common';
import SERVICES from './mockObject';

function Services() {
    return (
        <section className={styles.services}>
            <div className="container">
                <Title 
                    subTitle='Featured Products'
                    title='THE BEST SERVICES'
                    para='Problems trying to resolve the conflict between '
                />
                <div className="row">
                    {
                        SERVICES.map((el, index)=>{
                            return (
                                <div className="col-md-4" key={index}>
                                    <ServicesItem 
                                        icon={el.icon}
                                        title={el.title}
                                        info={el.info}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Services;