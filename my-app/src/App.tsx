import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./component/Welcome"
import Signup from "./component/Signup"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
