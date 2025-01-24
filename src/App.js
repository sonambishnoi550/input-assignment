import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/view/Home';
import Hero from './components/home/Hero';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:tab" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App