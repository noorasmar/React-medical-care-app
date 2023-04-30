import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import {
    TopBar, 
    Nav,
    Header,
    Statistics
} from './components';

function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Nav /> */}
      <Header />
      {/* <Statistics /> */}
    </div>
  );
}

export default App;
