import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserAuth from './pages/userAuth';

import './App.css';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserAuth />}/>
          <Route path="dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
