import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FinanceProvider from './context/FinanceProvider';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <FinanceProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </FinanceProvider>
  );
}

export default App;
