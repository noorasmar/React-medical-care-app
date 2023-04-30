import styles from './styles.module.css'

function Heading({type, font, children}) {
    return ( 
        <>
            { 
                type === 'h1'? <h1 className={font}>{children}</h1> :
                type === 'h2'? <h2 className={font}>{children}</h2> :
                type === 'h3'? <h3 className={font}>{children}</h3> :
                type === 'h4'? <h4 className={font}>{children}</h4> :
                type === 'h5'? <h5 className={font}>{children}</h5> :
                <h6 className={font}>{children}</h6>
            }
        </>
    );
}

export default Heading;