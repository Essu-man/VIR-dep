import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Hero from './Hero';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
