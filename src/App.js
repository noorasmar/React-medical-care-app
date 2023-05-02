import { useState } from 'react';
import LovesContext from './contexts/LovesContext';
import { CartProvider } from './contexts/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
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
} from './components';

function App() {
  const [loves, setLoves] = useState(0);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
