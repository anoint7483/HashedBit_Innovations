import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieGrid from './components/MovieGrid';
import MovieDetails from './components/MovieDetails';
import BookingForm from './components/BookingForm';
import BookingSuccess from './components/BookingSuccess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieGrid />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/success" element={<BookingSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
