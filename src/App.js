import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import TopBar from './components/TopBar';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Nav />
    </div>
  );
}

export default App;
