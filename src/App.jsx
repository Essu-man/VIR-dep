import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Admin from './Components/Admin';
import Dashboard from './Components/Dashboard';
import DataEntry from './Components/DataEntry';
import Hero from './Hero';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/virr/src/Components/DataEntry.jsx" element={<DataEntry />} />
        <Route path="/src/Components/Admin.jsx" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
