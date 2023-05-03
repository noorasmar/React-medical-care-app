import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import './App.css';

function App() {

  return (
    <div className="App">

      <Routes basename="/">
        <Route exact path="/" element={<HomePage />} />
        <Route path="/DashboardPage" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
