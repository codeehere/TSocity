import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import React, { Component } from 'react';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export default class App extends Component {
  render() {
    const country = "us";
    return (
      <React.StrictMode>
        <div>
          <Router>
            <NavBar />
            <Routes>
              {/* Redirect / to /home */}
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/entertainment" element={<News pageSize={5} country={country} crgry="entertainment" />} />
              <Route path="/sports" element={<News pageSize={5} country={country} crgry="sports" />} />
              <Route path="/science" element={<News pageSize={5} country={country} crgry="science" />} />
              <Route path="/health" element={<News pageSize={5} country={country} crgry="health" />} />
              <Route path="/business" element={<News pageSize={5} country={country} crgry="business" />} />
              <Route path="/technology" element={<News pageSize={5} country={country} crgry="technology" />} />
            </Routes>
          </Router>
        </div>
      </React.StrictMode>
    );
  }
}
