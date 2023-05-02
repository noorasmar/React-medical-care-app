import { useState } from 'react';
import LovesContext from '../contexts/LovesContext';
import { CartProvider } from '../contexts/CartContext';
import {
    TopBar, 
    Nav,
    Header,
    Statistics,
    Products,
    Services,
    Posts,
    Reviews,
    ContactUs,
    Subscribe,
    Footer
} from '../components';

function HomePage() {
    const [loves, setLoves] = useState(0);
    return (
        <>
            <CartProvider>
                <LovesContext.Provider value={{ loves, setLoves }}>
                    <TopBar />
                    <Nav />
                    <Header />
                    <Statistics />
                    <Products />
                    <Services />
                    <Posts />
                    <Reviews />
                    <ContactUs />
                    <Subscribe />
                    <Footer />
                </LovesContext.Provider>
            </CartProvider>
        </>
        
    );
}

export default HomePage;