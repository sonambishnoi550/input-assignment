import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Home/Hero'
import FilterPractice from './components/Home/FilterPractice';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/:tab" element={<Hero />} />
          <Route path="/about" element={<FilterPractice />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App