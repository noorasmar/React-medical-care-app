import { LoveProvider } from '../contexts/LovesContext';
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
    Footer,
} from '../components';

function HomePage() {
    return (
        <>
            <CartProvider>
                <LoveProvider>
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
                </LoveProvider>
            </CartProvider>
        </>
        
    );
}

export default HomePage;