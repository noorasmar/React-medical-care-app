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
    Services
} from './components';

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Nav /> */}
      <Header />
      <Statistics />
      <Products />
      <Services />
    </div>
  );
}

export default App;
